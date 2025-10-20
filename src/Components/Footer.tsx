"use client";

import React from "react";
import { toast } from "sonner";
import { useState } from "react";
import supabase from "@/utils/supabaseClient";

function Footer() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  function isValidEmail(email: string): boolean {
    if (!email) return false;
    const normalized = email.trim();
    // simple, widely-used pattern: "something@something.something"
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(normalized);
  }

  const checkEmail = async () => {
    if (isValidEmail(email)) {
      let { data: data, error } = await supabase
        .from("feedback")
        .select("*")
        .eq("email", email);

      if (data?.length == 0) {
        const { data, error } = await supabase
          .from("feedback")
          .insert([{ email: email, content: content }])
          .select();
          if(!error) {

              toast("Thank you for your feedback!");
              setEmail("");
              setContent("");
            } else {
                console.log(error)
                toast("Ups... something went wrong. Please try again after a while.")
            }
      } else {
        toast("Your thought has already been sent to us. Thank you!");
      }
    } else {
      toast("Please provide an email");
    }
  };
  return (
    <div className="w-full bg-black flex flex-col justify-center items-center py-20">
      <div className="w-full flex flex-col justify-center items-center sm:gap-2 gap-1 sm:px-0 px-5">
        <h5 className="text-white lg:text-5xl sm:text-4xl text-2xl font-garamond font-bold text-center">
          Share a thought about our products!
        </h5>
        <p className="text-[#FFFFFF80] lg:text-xl sm:text-base text-sm font-garamond text-center">
          Every feedback is very important for us.
        </p>
        <div className="mx-auto md:w-1/2 sm:w-4/5 w-full my-5 rounded-xl shadow-xl">
          <form className="font-spartan">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-white font-semibold text-lg"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 rounded-md text-base focus:outline-none focus:border-indigo-500 transition duration-200 placeholder-gray-500"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block mb-2 text-white font-semibold text-lg"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 rounded-md text-base resize-y focus:outline-none focus:orange-indigo-500 transition duration-200 placeholder-gray-500"
                required
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></textarea>
            </div>
            <div className="w-full flex justify-end">
              <button
                className="w-auto px-6 py-3 bg-gradient-to-r from-orange-700 to-blue-400 text-white rounded-lg cursor-pointer text-base font-bold shadow-md hover:from-orange-800 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault(), checkEmail();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
