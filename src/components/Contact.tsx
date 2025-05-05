import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MailIcon size={20} className="mr-3 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@example.com" className="text-gray-600 hover:text-blue-600">
                      hello@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon size={20} className="mr-3 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon size={20} className="mr-3 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">San Francisco, California</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}