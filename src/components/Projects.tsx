import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Projects() {
  const projects = [{
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Personal Finance Dashboard',
    description: 'An interactive dashboard for tracking personal finances with data visualization and budget planning tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Chart.js', 'Firebase'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Weather Application',
    description: 'A weather forecast app that provides current conditions and 5-day forecasts for any location.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80',
    tags: ['JavaScript', 'Weather API', 'CSS3'],
    liveLink: '#',
    githubLink: '#'
  }];
  return <section id="projects" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>)}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex items-center text-blue-600 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon size={16} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center text-gray-700 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={16} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}