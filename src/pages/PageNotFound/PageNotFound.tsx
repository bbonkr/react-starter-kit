import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageContainer } from '../../components/Layouts';

export const PageNotFound = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <Helmet title="Page not found" />

            <PageContainer id="page-not-found">
                <h1>404 | Page not found</h1>
                {location.pathname && (
                    <p>
                        <code>{location.pathname}</code> does not exist.
                    </p>
                )}

                <p>
                    <Link to="/">Go to Home</Link>
                </p>
            </PageContainer>
        </React.Fragment>
    );
};
