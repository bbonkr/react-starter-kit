import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LoadingComponent } from '../AsyncComponent';

export const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home - React Starter Kit</title>
            </Helmet>
            <div>
                <h1>Hello World</h1>
                <p>React Starter Kit</p>
            </div>
        </React.Fragment>
    );
};
