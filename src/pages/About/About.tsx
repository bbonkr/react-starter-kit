import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageContainer } from '../../components/Layouts';

export const About = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>About</title>
            </Helmet>
            <PageContainer id="about">
                <h1>About</h1>
                <p>React Starter Kit</p>
            </PageContainer>
        </React.Fragment>
    );
};
