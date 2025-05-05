import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
export function Hero() {
  return <section className="w-full min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hello, I'm <span className="text-blue-600">Jane Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Frontend Developer & UI Designer
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          I create clean, responsive websites with modern technologies that help
          businesses grow.
        </p>
        <a href="#about" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors">
          View My Work
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDownIcon size={20} />
        </a>
      </div>
    </section>;
}