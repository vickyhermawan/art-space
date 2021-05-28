import React from "react";
import Layout from "@components/organism/Layout/Layout";
import Title from "@components/organism/Title/index";
const Index: React.FC = ({ children }) => {
    return (
        <>
            <Layout>
                <Title title="Project" description="Some project that i have done do it"/>
            </Layout>
        </>
    );
};

export default Index;