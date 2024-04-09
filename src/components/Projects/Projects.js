import React, { useState } from 'react';
import projectsList from '../data/projects.json';

const linkSub = "/assets/github-logo.png";

const Projects = () => {

    // Search Logic
        const [searchTerm, setSearchTerm] = useState('');
      
        const filteredProjects = projectsList.filter(project =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase())
          // You can add more conditions here if you want to search in other properties
        );
    return (
<body>

        <div id="theme" className="min-h-screen grid">

        <main className=" flex flex-col items-center justify-center text-center bg-gradient-to-b from-ctp-base to-ctp-crust p-6">
        <div className="from-ctp-mantle to-ctp-crust outline-ctp-pink">
        <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-5xl font-bold p-4 mt-8">
          My Projects
        </h1>
        </div>
        


{/* The List of Projects  */}

<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12' >

            {/* The Seach bar  */}

            <form className="max-w-md mx-auto mb-8 ">
        <div className="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
          <input 
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Apps, Bots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>
      </form>


    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg font-semibold text-ctp-subtext0' id="id01">
      
      
      {/* The filtering & listing of Projects function  */}
        {filteredProjects.map((project) => {
            // Determine the image link based on the length of project.image
            const imageLink = project.image.length > 1 ? project.image : linkSub; // Replace 'linkSub' with your placeholder image link

            return (
                <div key={project.id} className="bg-white shadow-md hover:scale-105 hover:shadow-lg transition duration-500 ease-in-out flex flex-col h-full rounded-xl overflow-hidden group">
                    {/* Image and Text Overlay Container */}
                    <div className="relative">
                        <img src={imageLink} alt={project.name} className="rounded-lg w-full hover:blur transition duration-500"/> 

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {/* Name displayed over the image */}
                                <h3 className="text-white text-xl font-bold">{project.name}</h3>
                            </a>
                        </div>
                    </div>

                    <div className="p-6 flex-grow">
                        <h3 className="font-semibold text-lg mb-2 break-words">{project.name}</h3>
                        <p className="text-gray-700 mb-4 break-words flex-grow">{project.description}</p>
                    </div>
                </div>
            );
        })}
    </div>
</div>



{/* */}

        <footer>
            <p className=" text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-lg font-bold">Created by MortexAG</p>
          </footer>
        </main>
        </div>

   </body>
    );
    
};

export default Projects;