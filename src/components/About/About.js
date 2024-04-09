import "../../style.css";

const About = () => {

    return (

      <div id="theme" className="min-h-screen grid">
        <main className="flex flex-col items-center justify-center text-center  bg-gradient-to-b from-ctp-base to-ctp-crust p-6">
          <section className=" mb-10">

            <h1 className="text-transparent bg-gradient-to-r bg-clip-text  from-ctp-pink to-ctp-mauve text-5xl font-bold mb-8 mt-10">About Me</h1>

            <div className="max-w-5xl mx-auto p-6 text-left text-3xl font-semibold text-ctp-subtext0">

            <p className=" font-semibold mb-4">Hello, I am 
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve  font-bold mb-8"> MortexAG</span> and my real name is <span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-3xl font-bold mb-8">
                 Ahmed Gouda</span>.</p>
                
                 <hr className="w-1/3 mx-auto my-4 border-t-2 border-ctp-mauve mt-8 mb-8"></hr>
                
            <p>I like to do software development and 3D designing in blender.</p>
            <p> I like to build Desktop and Web application, using different languages and frameworks as in Python with flask and Tkinter and Nodejs with React, Nextjs and Expressjs</p>

                <hr className="w-1/3 mx-auto my-4 border-t-2 border-ctp-mauve mt-8 mb-8"></hr>

            <p className="mb-4">I have experience with several programming languages including:</p>

            <ul className="list-disc list-inside">
              <li><span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-mauve to-ctp-maroon  ">Python</span> (Flask, Tkinter)</li>
              <li><span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-lavender to-ctp-peach">JavaScript</span> (React, Node.js)</li>
              <li><span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-sapphire to-ctp-red  ">C#</span> (Unity)</li>
              {/* Add more languages as needed */}
            </ul>

                <hr className="w-1/3 mx-auto my-4 border-t-2 border-ctp-mauve mt-8 mb-8"></hr>

            <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-lavender to-ctp-maroon text-4xl font-bold mb-8 p-1">Software I Worked With</h2>

            <ul className="list-disc list-inside">

              <li><span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-mauve to-ctp-maroon  ">Blender</span></li>
              <li><span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-lavender to-ctp-peach">Unity</span></li>
              <li><span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-sapphire to-ctp-red  ">Unreal Engine</span></li>
              <li><span className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-mauve to-ctp-red  ">Adobe Photoshop, After Effcts & Premiere</span></li>
              {/* Add more languages as needed */}
            </ul>


            </div>

          </section>

        <section className=" mb-10 mt-10">

          <div className="space-x-4 max-w-5xl mx-auto p-6 text-left text-2xl font-semibold text-ctp-subtext0">

            <hr className="w-1/3 mx-auto my-4 border-t-2 border-ctp-mauve mt-8 mb-8"></hr>
        
        <p className="mb-10">You Can See my Projects From Here</p>

        
        </div>
        <div className="space-x-4 flex flex-col items-center justify-center text-center">
          <a href="#/projects" className="bg-ctp-lavender hover:bg-ctp-mauve active:bg-ctp-mauve/75 font-bold py-2 px-4 rounded-xl text-black transition duration-1000 hover:shadow-md hover:shadow-ctp-lavender">
            Projects
          </a>

        </div>

        </section>
  
          <footer>
            <p className=" text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-lg font-bold">Created by MortexAG</p>
          </footer>
        </main>
      </div>
    );
  };
  
  export default About;
  