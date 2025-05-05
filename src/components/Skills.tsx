import React from 'react';
export function Skills() {
  const skills = [{
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']
  }, {
    category: 'Tools & Others',
    items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Responsive Design', 'Performance Optimization']
  }];
  return <section id="skills" className="py-20 w-full bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skillGroup, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                      {skill}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}