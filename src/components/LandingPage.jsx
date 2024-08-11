import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-slate-950 text-white">
            <section className="hero min-h-screen flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-6xl font-bold mb-4">FlashCard LearnX</h1>
                <p className="text-lg mb-6 max-w-xl">
                    Master your subjects with interactive flashcards designed for effective learning.
                </p>
                <a href="#flashcards">
                    <button className="bg-white hover:bg-slate-200 text-slate-950 font-bold py-3 
                    hover:scale-95 transition-all
                    px-6 rounded-lg">
                        Get Started
                    </button>
                </a>
            </section>

            {/* Features Section */}
            <section className="features py-20 px-4">
                <h2 className="text-4xl font-semibold text-center mb-10">Why Choose FlashCard LearnX?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="feature-item p-6 bg-slate-800 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-semibold mb-4">Interactive Learning</h3>
                        <p className="text-gray-400">Engage with content through interactive flashcards that adapt to your learning pace.</p>
                    </div>
                    <div className="feature-item p-6 bg-slate-800 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-semibold mb-4">Customizable Flashcards</h3>
                        <p className="text-gray-400">Create your own flashcards, customize them with images, and organize them into sets.</p>
                    </div>
                    <div className="feature-item p-6 bg-slate-800 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-semibold mb-4">Track Your Progress</h3>
                        <p className="text-gray-400">Monitor your progress with detailed statistics and insights on your learning journey.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LandingPage;
