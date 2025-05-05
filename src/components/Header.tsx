import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Portfolio
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 focus:outline-none">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        <nav className={`
          ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4' : 'hidden'} 
          md:block md:static md:bg-transparent md:shadow-none md:p-0
        `}>
          <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <a href="#about" className="hover:text-gray-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-600 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-600 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>;
}