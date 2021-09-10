import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageContainer } from '../../components/Layouts';

export const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <PageContainer id="home">
                <h1>Hello World</h1>
                <p>React Starter Kit</p>
            </PageContainer>
        </React.Fragment>
    );
};
