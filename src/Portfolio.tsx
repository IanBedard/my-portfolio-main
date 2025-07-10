import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
}

interface Skill {
  name: string;
  level: number;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://demo.com",
      github: "https://github.com/username/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
      link: "https://demo.com",
      github: "https://github.com/username/project2"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and data visualization.",
      technologies: ["React", "D3.js", "OpenWeather API", "Tailwind"],
      link: "https://demo.com",
      github: "https://github.com/username/project3"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and data visualization.",
      technologies: ["React", "D3.js", "OpenWeather API", "Tailwind"],
      link: "https://demo.com",
      github: "https://github.com/username/project3"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and data visualization.",
      technologies: ["React", "D3.js", "OpenWeather API", "Tailwind"],
      link: "https://demo.com",
      github: "https://github.com/username/project3"
    }
  ];

  const skills: Skill[] = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "AWS", level: 65 }
  ];

  return (
    <div className="min-h-screen bg-base-100">
     

     

      {/* About Section */}
      <section id="about" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p className="text-lg leading-relaxed">
                  I'm a passionate full-stack developer with 5+ years of experience creating web applications 
                  that solve real-world problems. I love working with modern technologies and am always eager 
                  to learn new skills. My goal is to build applications that not only function flawlessly but 
                  also provide exceptional user experiences.
                </p>
                <div className="stats stats-vertical lg:stats-horizontal shadow mt-8">
                  <div className="stat">
                    <div className="stat-title">Projects Completed</div>
                    <div className="stat-value text-primary">50+</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Years Experience</div>
                    <div className="stat-value text-secondary">5+</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Happy Clients</div>
                    <div className="stat-value text-accent">100+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-base-content opacity-70">{skill.level}%</span>
                    </div>
                    <progress className="progress progress-primary w-full" value={skill.level} max="100"></progress>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card bg-base-100 shadow-xl">
                <figure className="px-6 pt-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="text-sm opacity-70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="badge badge-outline badge-primary">{tech}</div>
                    ))}
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Live Demo</button>
                    <button className="btn btn-outline btn-sm">GitHub</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                <p className="text-lg mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm opacity-70">john.doe@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-sm opacity-70">New York, NY</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title mb-4">Send Message</h3>
                  <div className="space-y-4">
                    <div className="form-control">
                      <input type="text" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <input type="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <textarea placeholder="Your Message" className="textarea textarea-bordered h-32"></textarea>
                    </div>
                    <div className="form-control">
                      <button className="btn btn-primary">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Skills</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="btn btn-ghost btn-circle">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All rights reserved by John Doe</p>
        </aside>
      </footer>
    </div>
  );
};

export default Portfolio;