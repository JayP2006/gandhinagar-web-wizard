
import { useEffect, useRef } from "react";
import { ArrowRight, Download, Linkedin } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();

    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(window.innerWidth / 10, 100);
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsla(${Math.random() * 60 + 210}, 100%, 70%, ${Math.random() * 0.5 + 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Connect particles with lines
    function connect() {
      const maxDistance = 150;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            if (ctx) {
              ctx.strokeStyle = `rgba(150, 150, 255, ${opacity * 0.4})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particle Animation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 z-10" />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Patel Jaykumar Rakeshbhai
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
              Gandhinagar, Gujarat
            </h2>
            <p className="text-lg md:text-xl text-accent font-semibold mb-8">
              Full Stack Developer | AI & Web Enthusiast
            </p>
          </div>
          
          <div 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <a 
              href="/Resume-1.pdf" 
              download="Resume-1.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-full shadow-lg hover:shadow-accent/50 transition-all"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full shadow-lg hover:shadow-lg transition-all"
            >
              <span>View Projects</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/pjaykumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white font-medium rounded-full shadow-lg hover:shadow-[#0077B5]/50 transition-all"
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-700 dark:text-gray-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
