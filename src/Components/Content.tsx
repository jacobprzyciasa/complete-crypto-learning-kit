'use client'
import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import Products from "./Products";

function Content() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const words = ['Coming...', 'Yours...', 'Near...', 'Decentralized...', 'Unstoppable...', 'Borderless...']
  const baseText = 'The \n Future Is \n '
  
  useEffect(() => {
    // Initial typing animation
    let index = 0
    const fullInitialText = baseText + words[0]
    
    const typingInterval = setInterval(() => {
      if (index < fullInitialText.length) {
        setDisplayedText(fullInitialText.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    if (!isTypingComplete) return

    const wordCycleTimeout = setTimeout(() => {
      let charIndex = words[currentWordIndex].length
      
      // Deleting animation
      const deleteInterval = setInterval(() => {
        if (charIndex > 0) {
          setDisplayedText(baseText + words[currentWordIndex].slice(0, charIndex - 1))
          charIndex--
        } else {
          clearInterval(deleteInterval)
          
          // Typing new word
          const nextWordIndex = (currentWordIndex + 1) % words.length
          let newCharIndex = 0
          
          const typeInterval = setInterval(() => {
            if (newCharIndex <= words[nextWordIndex].length) {
              setDisplayedText(baseText + words[nextWordIndex].slice(0, newCharIndex))
              newCharIndex++
            } else {
              clearInterval(typeInterval)
              setCurrentWordIndex(nextWordIndex)
            }
          }, 100)
        }
      }, 50)
    }, 4000)

    return () => clearTimeout(wordCycleTimeout)
  }, [isTypingComplete, currentWordIndex])

  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <div className="h-full">
        <div className="h-screen flex items-center lg:pl-52 sm:pl-20 pl-5 w-full">
          <h1 className="text-white font-garamond xl:text-9xl lg:text-8xl sm:text-7xl text-6xl font-bold">
            {formatText(displayedText)}
            <span className={`${isTypingComplete ? 'animate-hide' : ''} text-[#ffffffa1]`}>|</span>
          </h1>
        </div>
      <Welcome />
      <Products />
    </div>
  );
}

export default Content;
