import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AsyncComponent, LoadingComponent } from '../AsyncComponent';
import { appSettings } from '../../appSettings';

import './App.css';

const Header = AsyncComponent(() => import('../Header'), {
    resolveComponent: (props) => props.Header,
    fallback: <LoadingComponent />,
});

const Home = AsyncComponent(() => import('../../pages/Home'), {
    resolveComponent: (props) => props.Home,
    fallback: <LoadingComponent />,
});

const About = AsyncComponent(() => import('../../pages/About'), {
    resolveComponent: (props) => props.About,
    fallback: <LoadingComponent />,
});

const PageNotFound = AsyncComponent(() => import('../../pages/PageNotFound'), {
    resolveComponent: (props) => props.PageNotFound,
    fallback: <LoadingComponent />,
});

const helmetContext = {};

export const App = () => {
    return (
        <HelmetProvider context={helmetContext}>
            <Router>
                <Header />
                <Helmet
                    defaultTitle={appSettings.title}
                    titleTemplate={`%s : ${appSettings.title}`}
                />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};
