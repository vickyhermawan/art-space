import React from "react";
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@components/organism/Hero/index'));
const Layout = dynamic(() => import('@components/organism/Layout/Layout'));

const Index: React.FC = ({ children }) => {
    return (
        <>
            <Layout>
                <Hero />
            </Layout>
        </>
    );
};

export default Index;