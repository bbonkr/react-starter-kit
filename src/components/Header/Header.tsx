import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <nav id="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/hello-world">Does not exist page</Link>
                </li>
            </ul>
        </nav>
    );
};
