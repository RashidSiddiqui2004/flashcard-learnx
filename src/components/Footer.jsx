
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-center md:text-left">
                    <p>&copy; 2024 FlashCard LearnX. All Rights Reserved.</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
                    <Link to={"/"} className="text-slate-100 hover:text-blue-500">Privacy Policy</Link>
                    <Link to={"/"} className="text-slate-100 hover:text-blue-500">Terms of Service</Link>
                    <Link to={"https://www.linkedin.com/in/rashid-siddiqui2004"} target='_blank' className="text-slate-100 hover:text-blue-500">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
