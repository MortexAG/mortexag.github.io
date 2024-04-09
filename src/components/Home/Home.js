// src/components/Home.js


export default function Home() {
    
    return (

        <div id="theme" className="min-h-screen grid">

        <main className=" flex flex-col items-center justify-center text-center bg-gradient-to-b from-ctp-base to-ctp-crust p-6">

        <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-5xl font-bold">
            Hi There
            <span className="text-white">👋</span>
        </h1>
        <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-5xl font-bold">
          I am MortexAG
        </h1>
        
        <p className="text-lg text-ctp-subtext0 mb-8">
          I'm a Gamer, Software Developer and 3D Designer.
        </p>

        <div className="space-x-4 mb-10">
          <a href="#/projects" className="bg-ctp-lavender hover:bg-ctp-mauve active:bg-ctp-mauve/75 font-bold py-2 px-4 rounded-xl transition duration-1000 hover:shadow-md hover:shadow-ctp-lavender">
            View Projects
          </a>
          <a href="#/contact" className="bg-ctp-lavender hover:bg-ctp-mauve active:bg-ctp-mauve/75 font-bold py-2 px-4 rounded-xl transition duration-1000 hover:shadow-md hover:shadow-ctp-lavender">
            Contact Me
          </a>
        </div>
        <div className="flex space-x-4 mb-10">
                    {/* GitHub Icon */}
                    <a href="https://github.com/MortexAG" target="blank" className="w-12 h-12 rounded-full flex items-center justify-center bg-ctp-lavender transition duration-1000 hover:shadow-md hover:shadow-ctp-lavender">
                        <svg className="w-6 h-6 text-white hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            {/* Insert GitHub SVG path here */}
                            <path d="M12,2C6.48,2,2,6.48,2,12c0,4.42,2.87,8.16,6.84,9.49c0.5,0.09,0.68-0.22,0.68-0.48c0-0.24-0.01-0.87-0.01-1.71
                            c-2.78,0.6-3.37-1.34-3.37-1.34c-0.45-1.15-1.11-1.46-1.11-1.46c-0.91-0.62,0.07-0.61,0.07-0.61c1,0.07,1.53,1.03,1.53,1.03
                            c0.89,1.53,2.34,1.09,2.91,0.83c0.09-0.65,0.35-1.09,0.63-1.34c-2.22-0.25-4.56-1.11-4.56-4.94c0-1.09,0.39-1.99,1.03-2.69
                            c-0.1-0.25-0.45-1.28,0.1-2.67c0,0,0.84-0.27,2.75,1.02c0.8-0.22,1.65-0.33,2.5-0.33s1.7,0.11,2.5,0.33c1.91-1.29,2.75-1.02,2.75-1.02
                            c0.55,1.39,0.2,2.42,0.1,2.67c0.64,0.7,1.03,1.6,1.03,2.69c0,3.84-2.34,4.69-4.57,4.94c0.36,0.31,0.68,0.92,0.68,1.85
                            c0,1.34-0.01,2.42-0.01,2.75c0,0.27,0.18,0.58,0.69,0.48C19.13,20.16,22,16.42,22,12C22,6.48,17.52,2,12,2z"/>
                        </svg>
                    </a>
                    {/* Replit Icon */}
                    <a href="https://replit.com/@MortexAG" target="blank" className="w-12 h-12 rounded-full flex items-center justify-center bg-ctp-lavender transition duration-1000 hover:shadow-md hover:shadow-ctp-lavender">
                        <svg className="w-6 h-6 text-white-800 hover:text-white " fill="currentColor" viewBox="0 0 256 308">
                        <path fill="#f26207" d="M0 19.2C0 8.596 8.596 0 19.2 0h89.6C119.404 0 128 8.596 128 19.2v83.2H19.2C8.596 102.4 0 93.804 0 83.2zm128 83.2h108.8c10.604 0 19.2 8.596 19.2 19.2v64c0 10.604-8.596 19.2-19.2 19.2H128zM0 224c0-10.604 8.596-19.2 19.2-19.2H128V288c0 10.604-8.596 19.2-19.2 19.2H19.2C8.596 307.2 0 298.604 0 288z"/>
                            <path d="Your Replit SVG Path Here" />
                        </svg>
                    </a>
                    {/* Discord Icon */}
                    <a href="https://discord.gg/k3M8Y663uR" target="blank" className="w-12 h-12 rounded-full flex items-center justify-center bg-ctp-lavender transition duration-1000 hover:shadow-md hover:shadow-ctp-lavender">
                    <svg className="w-6 h-6 text-white hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
    <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z"/>
</svg>
                        
                    </a>
                </div>

        <footer>
            <p className=" text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-lg font-bold">Created by MortexAG</p>
          </footer>
</main>
        </div>


    );
  };
  
  