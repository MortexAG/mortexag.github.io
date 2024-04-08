import React from 'react';

export default function Contact() {
    // const handleSubmit = (event) => {
    //     event.preventDefault(); // Prevent the default form submit action

    //     const form = event.target;
    //     const formData = new FormData(form);
    //     const email = formData.get('email');
    //     const subject = encodeURIComponent('Contact from My Portfolio');
    //     const body = encodeURIComponent(formData.get('message'));

    //     // This opens the user's default email client with the email, subject, and body fields filled
    //     window.location = `mailto:${email}?subject=${subject}&body=${body}`;
    // };

    return (
        <div id="theme" className="min-h-screen grid">
            <main className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-ctp-base to-ctp-crust p-6">
                <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-5xl font-bold p-4 mt-8 mb-8">
                    Contact Me
                </h1>
                {/* <form onSubmit={handleSubmit} className="w-full max-w-xs">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="mb-4 px-3 py-2 border rounded-lg text-black w-full"
                    />
                    <textarea
                        name="message"
                        required
                        placeholder="Your Message"
                        rows="4"
                        className="mb-4 px-3 py-2 border rounded-lg text-black w-full"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-ctp-lavender hover:bg-ctp-mauve active:bg-ctp-mauve/75 font-bold py-2 px-4 rounded-xl transition duration-1000 hover:shadow-md hover:shadow-ctp-lavender"
                    >
                        Send Email
                    </button>
                </form> */}

<div className="flex space-x-4 mb-10">
                    {/* GitHub Icon */}
                    <a href="https://discord.gg/k3M8Y663uR" target="blank" className="w-12 h-12 rounded-full flex items-center justify-center bg-ctp-lavender transition duration-1000 hover:shadow-md hover:shadow-ctp-lavender">
                    <svg className="w-6 h-6 text-white hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
    <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z"/>
</svg>
                        
                    </a>
                    </div>
                <footer>
                    <p className="text-transparent bg-gradient-to-r bg-clip-text from-ctp-pink to-ctp-mauve text-lg font-bold mt-8">
                        Created by MortexAG
                    </p>
                </footer>
                
            </main>
        </div>
    );
}
