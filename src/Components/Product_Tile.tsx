'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { productListTypes } from '@/utils/productList';

interface ProductTileProps {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}

export default function ProductTile({ name, description, image, url }: productListTypes) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const tileRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tileRef.current) return;

    const rect = tileRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div
      ref={tileRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="w-96 cursor-pointer perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative full h-64 flex items-center mt-5">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm line-clamp-3 font-garamond font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}
