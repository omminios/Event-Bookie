import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

    return(
        <nav className="flex justify-between items-center bg-orange-400 text-white py-4 px-7 text-lg w-full">
            <div className="flex items-center space-x-4">
            <ul className="flex items-center space-x-4">
                <li><Link to='/'><img className="h-16" src="images/eb_Logo.png" alt="Home"/></Link></li>
                {/*
                <li className="hover:text-orange-600 leading-tight">Sports</li>
                <li className="hover:text-orange-600 leading-tight">Music</li>
                <li className="hover:text-orange-600 leading-tight">Shows</li>
                */}
            </ul>
            </div>
            <div className="items-center flex space-x-4">
                <ul>
                    <a href=""><li className="hover:text-orange-600">My Tickets</li></a>
                </ul>
                <ul>
                    <Link to='/LoginPage'><li className="bg-red-500 rounded-md p-2 hover:text-purple-600">Login</li></Link>
                </ul>
            </div>
    </nav>
    );
}

export default Header