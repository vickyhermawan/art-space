import React from "react";
import Layout from "@components/organism/Layout/Layout";
import Title from "@components/organism/Title/index";
import Project from "@components/organism/List/index";
import Portofolio from "@data/portofolio";


const Index: React.FC = ({ children }) => {
    return (
        <>
            <Layout>
                <Title title="Project" description="Some project that i have done do it"/>
                <Project portofolio={Portofolio}/>
            </Layout>
        </>
    );
};

export default Index;