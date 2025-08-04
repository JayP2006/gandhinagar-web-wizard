
const Education = () => {
  const educationItems = [
    {
      institution: "SSIT, Gandhinagar",
      degree: "B.Tech in Computer Science Engineering",
      duration: "2024 - 2027",
      grade: "CGPA: 8.98",
      details: "Focused on advanced computer science topics including web development, artificial intelligence, and database systems."
    },
    {
      institution: "SSP Polytechnic",
      degree: "Diploma in Computer Engineering",
      duration: "2021 - 2024",
      grade: "CGPA: 9.65",
      details: "Developed strong foundation in programming, computer networks, and software engineering principles."
    },
    {
      institution: "Sheth C.M. Highschool",
      degree: "10th Standard",
      duration: "2020 - 2021",
      grade: "Percentage: 83%",
      details: "Developed a strong foundation in mathematics and science, setting the stage for future technological pursuits."
    }
  ];

  const achievements = [
    {
      title: "1st Rank in 6th Semester",
      organization: "Gujarat Technological University",
      year: "2024",
      description: "Secured the top position among all computer science students in the 6th semester examinations."
    },
    {
      title: "300+ DSA problem solved",
      organization: "Data Structures & Algorithm",
      year: "2025",
      description: "Solved 200+ DSA problems across LeetCode and GeeksforGeeks with consistent focus on optimization and edge case handling"
    },
    {
      title: "3 ⭐⭐⭐ in problem solving HackerRank",
      organization: "Data Structures & Algorithm",
      year: "2025",
      description: "3-Star in Problem Solving on HackerRank, demonstrating strong grasp of algorithms and data structures."
    },
    {
      title: "Certificates of AI,Next.js and Javascript",
      organization: "Data Structures & Algorithm",
      year: "2025",
      description: "Certified in AI & Green Skills (Edunet), Next.js(GFG), Advanced JavaScript (GFG), and HackerRank Intermediate"
    },
    {
      title: "GeeksforGeeks 160 Days DSA",
      organization: "Data Structures & Algorithm",
      year: "2025",
      description: "Currently participating in the GeeksforGeeks 160 Days DSA Challenge to strengthen core programming fundamentals"
    }
    
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Education & Achievements
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white" data-aos="fade-up">
              Education
            </h3>
            
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
              {educationItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" 
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 dark:bg-slate-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="font-bold text-gray-900 dark:text-gray-100">{index + 1}</span>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.institution}</h4>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.duration}</span>
                    </div>
                    <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">{item.degree}</h5>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">
                        {item.grade}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white" data-aos="fade-up">
              Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{achievement.title}</h4>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{achievement.year}</span>
                  </div>
                  <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">{achievement.organization}</h5>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
