import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import routesConfig from './routers.json';
import Loading from '../pages/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';

const lazyLoad = (componentName: string) => {
    return lazy(() => import(`../pages/${componentName}`));
};

const RoutesComponent: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Header />
                <Routes>
                    {routesConfig.map((route, index) => {
                        const Component = lazyLoad(route.component);
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Component />}
                                index={route.exact}
                            />
                        );
                    })}
                    <Route path='/' element={<Navigate to="/home/" />} />
                    <Route path="*" element={<div>Error...</div>} />
                </Routes>
                <Footer />
            </Suspense>
        </Router>
    );
};

export default RoutesComponent;