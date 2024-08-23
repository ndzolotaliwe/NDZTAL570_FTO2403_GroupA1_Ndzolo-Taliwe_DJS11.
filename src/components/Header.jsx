import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {
    // Define active styles for the active link
    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    };
    
    return (
        <header>
            <h1>PodCaListic</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            style={({ isActive }) => isActive ? activeStyles : undefined}
                        > 
                        
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            style={({ isActive }) => isActive ? activeStyles : undefined}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/favorite" 
                            style={({ isActive }) => isActive ? activeStyles : undefined}
                        >
                            Favorite
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
