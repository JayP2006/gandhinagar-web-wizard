
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            Patel Jaykumar Rakeshbhai
          </h2>
          <p className="text-gray-400 mb-6">
            Full Stack Developer | AI & Web Enthusiast
          </p>
          
          <div className="max-w-md mx-auto mb-6">
            <p className="text-gray-400">
              Thank you for visiting my portfolio. Feel free to reach out if you have any questions or opportunities to discuss.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              &copy; {currentYear} Patel Jaykumar Rakeshbhai. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
