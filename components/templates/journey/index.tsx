import React from "react";
import Layout from "@components/organism/Layout/Layout";
import Title from "@components/organism/Title/index";
import Timeline from "@components/organism/Timeline/index";

const Index: React.FC = ({ children }) => {
    return (
        <>
            <Layout>
                <Title title="Journey" description="A million steps to survive until today"/>
                <Timeline />
            </Layout>
        </>
    );
};

export default Index;