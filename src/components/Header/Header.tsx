import React from 'react';
import { Link } from 'react-router-dom';
import { appSettings } from '../../appSettings';
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
            <ul>
                {appSettings.gitHub && (
                    <li>
                        <a
                            href={appSettings.gitHub}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                )}
                {appSettings.npm && (
                    <li>
                        <a
                            href={appSettings.npm}
                            target="_blank"
                            rel="noreferrer"
                        >
                            NPM
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};
