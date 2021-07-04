import React from "react";
import dynamic from 'next/dynamic';
import ListStack from "@data/stack";

const Title = dynamic(() => import('@components/organism/Title/index'));
const Layout = dynamic(() => import('@components/organism/Layout/Layout'));
const Introduce = dynamic(() => import('@components/organism/IntroduceSelf/index'));

const Index: React.FC = ({ children }) => {
    return (
        <>
            <Layout>
                <Title title="About" description="Description about me :)"/>
                <Introduce listStack={ListStack}/>
            </Layout>
        </>
    );
};

export default Index;