import React from "react";
import Layout from "@components/organism/Layout/Layout";
import Title from "@components/organism/Title/index";

const Index: React.FC = ({ children }) => {
    return (
        <>
            <Layout>
                <Title title="About" description="Description about me :)"/>
            </Layout>
        </>
    );
};

export default Index;