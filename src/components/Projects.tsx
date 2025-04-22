import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Assessment Tool for Students",
      description: "AI-powered platform for evaluating grammar, speech, and resumes with feedback generation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      icon: "robot",
      techStack: ["MERN Stack", "AI APIs (Cohere, AssemblyAI)"],
      github: "#",
      liveDemo: "#"
    },
    {
      title: "AI Code Reviewer",
      description: "Web app to submit code and get AI-generated review suggestions, detect bugs, and improve code quality.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      icon: "file-code-2",
      techStack: ["MERN Stack", "Gemini API", "MongoDB"],
      github: "https://github.com/JayP2006/ai-powered-code-reviewer",
      liveDemo: "#"
    },
    {
      title: "Realtime Chat App",
      description: "Real-time chat with secure JWT login, instant messaging, and MongoDB-based storage.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      icon: "message-square",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com/JayP2006/chat-app",
      liveDemo: "#"
    },
    {
      title: "AI Image Enhancer",
      description: "Upload and enhance images with AI upscaling, denoising, and contrast adjustment.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      icon: "image",
      techStack: ["React", "Node.js", "AI APIs", "MongoDB"],
      github: "#",
      liveDemo: "#"
    },
    {
      title: "Blood Bank Management System",
      description: "Django-based admin dashboard for managing donors, recipients, and blood inventory.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      icon: "hospital",
      techStack: ["Python", "Django", "SQLite"],
      github: "#",
      liveDemo: "#"
    },
    {
      title: "Rock Paper Scissors Game",
      description: "Interactive browser game with basic game logic and score tracking.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      icon: "hand-rock",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "#",
      liveDemo: "#"
    },
    {
      title: "Realtime Location Tracking",
      description: "GPS tracking app with real-time location updates, route history, and geofencing alerts using WebSocket.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      icon: "map-pin",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Google Maps API"],
      github: "https://github.com/JayP2006/realtime-tracking",
      liveDemo: "#"
    },
    {
      title: "Instagram Clone",
      description: "Social media platform with photo sharing, likes, comments, and real-time messaging features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      icon: "instagram",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Cloudinary"],
      github: "https://github.com/JayP2006/instagram-clone",
      liveDemo: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  
                  <a 
                    href={project.liveDemo}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
