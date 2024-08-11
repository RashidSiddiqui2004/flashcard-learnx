import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-slate-950 text-white shadow-md flex justify-between items-center px-5 py-2 text-raleway'>
            <div className='flex items-center'>
                <Link to={'/'} className='text-xl font-bold'>FlashCard LearnX</Link>
            </div>
            <ul className='flex space-x-8'>
                <li>
                    <Link to='/newset' className='text-slate-100 hover:text-slate-300 font-medium transition-colors duration-200'>
                        Create FlashCard
                    </Link>
                </li>
                <li>
                    <Link to='/admin' className='text-slate-100 hover:text-slate-300 font-medium transition-colors duration-200'>
                        Admin Dashboard
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
