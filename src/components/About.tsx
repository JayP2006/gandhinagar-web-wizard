
const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 border-4 border-accent shadow-lg">
                <img 
                  src="/jayphoto.jpg" 
                  alt="Patel Jaykumar Rakeshbhai" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  I'm a Computer Science student at <strong>SSIT, Gandhinagar</strong> with a CGPA of <strong>8.98</strong>. Previously, I studied at SSP Polytechnic where I maintained a CGPA of <strong>9.65</strong>.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  I'm passionate about web development, AI tools, and automation. My expertise lies in building full-stack applications using the MERN stack, Django, Python, and various API integrations.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I enjoy solving complex problems and creating innovative solutions that make a difference. My goal is to combine my technical skills with creative thinking to develop impactful applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
