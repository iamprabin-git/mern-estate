import React from 'react';
import logo from '../assets/Image/logo.png'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='bg-cream shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>

                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <img src={logo} alt="logo" className='w-15 h-20' />
                        {/* <span className='text-slate-500'>Lele </span>
                        <span className='text-slate-800'>Sasto Gharjagga </span> */}

                    </h1>
                </Link>
                <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='search .........' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-slate-600' />
                </form>
                <ul className='flex gap-4'>
                    <Link to="/">
                        <li className='hidden sm:inline text-red-700 hover:underline cursor-pointer'>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className='hidden sm:inline text-red-700 hover:underline cursor-pointer'>About</li>
                    </Link>
                    <Link to="/sign-in">
                        <li className= 'text-red-700 hover:underline cursor-pointer'>Sign In</li>
                    </Link>
                </ul>
            </div>

        </header>
    )
}
