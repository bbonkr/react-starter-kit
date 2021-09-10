import React from 'react';
import { Location } from 'history';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageContainer } from '../../components/Layouts';

interface LocationState {
    from: Location;
}

export const PageNotFound = () => {
    const {
        state: { from },
    } = useLocation<LocationState>();

    return (
        <React.Fragment>
            <Helmet title="Page not found" />

            <PageContainer id="page-not-found">
                <h1>404 | Page not found</h1>
                <p>
                    <code>{from.pathname}</code> does not exist.
                </p>
                <p>
                    <Link to="/">Go to Home</Link>
                </p>
            </PageContainer>
        </React.Fragment>
    );
};
