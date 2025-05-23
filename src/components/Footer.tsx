export default function Footer() {
  return (
    <footer className="py-10 px-6 lg:px-16 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400">
            &copy; 2024 ANY PRODUCTION LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            
              href="https://www.instagram.com/anytelevision/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              INSTAGRAM
            </a>
            
              href="https://www.youtube.com/@kortyeo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              YOUTUBE
            </a>
            
              href="https://twitter.com/korty_eo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              TWITTER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}