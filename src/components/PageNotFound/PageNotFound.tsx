import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const PageNotFound = () => {
    let {
        state: { from },
    } = useLocation<{ from: Location }>();

    return (
        <div>
            <h1>404 | Page not found</h1>
            <p>
                <code>{from.pathname}</code> does not exist.
            </p>
            <p>
                <Link to="/">Go to Home</Link>
            </p>
        </div>
    );
};
