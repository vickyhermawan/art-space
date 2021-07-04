import React from "react";
import dynamic from 'next/dynamic';
import Portofolio from "@data/portofolio";

const Title = dynamic(() => import('@components/organism/Title/index'));
const Project = dynamic(() => import('@components/organism/List/index'));
const Layout = dynamic(() => import('@components/organism/Layout/Layout'));


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