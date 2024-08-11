import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    const [adminOption, setAdminOption] = useState("?");

    return (
        <div className='min-h-screen bg-slate-900 text-white p-6'>
            <h1 className='text-4xl font-bold mb-8'>Admin Dashboard</h1>

            {adminOption === "?" &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                    <div className='p-6 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 transition duration-200
                    cursor-pointer'
                        onClick={() => setAdminOption("manageCards")}>
                        <h2 className='text-2xl font-semibold mb-4'>Manage Flashcards</h2>
                        <p className='text-gray-400'>Create, edit, or delete flashcards.</p>
                    </div>

                    <div className='p-6 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 transition duration-200'>
                        <h2 className='text-2xl font-semibold mb-4'>View Statistics</h2>
                        <p className='text-gray-400'>Analyze user engagement and card performance.</p>
                        <span className='text-gray-400 text-xs'>Not Implemented yet</span>
                    </div>

                    <div className='p-6 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 transition duration-200'>
                        <h2 className='text-2xl font-semibold mb-4'>Settings</h2>
                        <p className='text-gray-400'>Configure application settings and preferences.</p>
                        <span className='text-gray-400 text-xs'>Not Implemented yet</span>
                    </div>
                </div>
            }
            <div>
                {adminOption === "manageCards" &&
                    <div>
                        {adminOption === "manageCards" && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                                <Link to={'/newset'}
                                    className='p-6 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 transition duration-200'
                                >
                                    <h2 className='text-2xl font-semibold mb-4'>Create a New FlashCard</h2>
                                    <p className='text-gray-400'>Add a new flashcard to the set.</p>
                                </Link>
                                <Link to={'/admin/manage-cards'}
                                    className='p-6 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 transition duration-200'
                                >
                                    <h2 className='text-2xl font-semibold mb-4'>Manage Flashcards</h2>
                                    <p className='text-gray-400'>Modify existing flashcards.</p>
                                </Link>

                            </div>
                        )}
                    </div>
                }
            </div>
        </div >
    );
};

export default AdminDashboard;
