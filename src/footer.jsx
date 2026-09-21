import './App.css'

function Footer() {

    return (
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold">
            All Rights Reserved &copy; <span>Nexora, 2025</span>
          </p>
          <p className="font-bold">
            Made with 💙 by <span>Nexora</span>
          </p>
        </div>
        <div className="flex gap-6 text-2xl">
          <a
            className="text-blue-400 hover:text-blue-300 transition"
            href="https://huggingface.co/davex-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fas fa-smile"></i>
          </a>
          <a
            className="text-gray-300 hover:text-white transition"
            href="https://www.github.com/davex-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className=" text-white-400 hover:text-white-300 transition"
            href="https://medium.com/@davex.ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Snapchat"
          >
            <i className="fa-solid fa-blog"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
