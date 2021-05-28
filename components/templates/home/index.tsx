import React from "react";
import Layout from "@components/organism/Layout/Layout";
import Hero from "@components/organism/Hero/index";

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