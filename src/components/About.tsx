import React from 'react';
export function About() {
  return <section id="about" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10"></div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Portrait of Jane Doe" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                I'm a passionate frontend developer with 5 years of experience
                building modern web applications. I specialize in creating
                intuitive user interfaces that are both functional and
                aesthetically pleasing.
              </p>
              <p className="text-gray-600 mb-4">
                My approach combines clean code practices with thoughtful design
                principles to deliver exceptional user experiences that help
                businesses achieve their goals.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me hiking in the mountains,
                reading science fiction, or experimenting with new recipes in
                the kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}