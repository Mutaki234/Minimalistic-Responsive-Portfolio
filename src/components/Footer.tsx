import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Jane Doe. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}