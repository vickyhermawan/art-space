import React from "react";
import Layout from "@components/organism/Layout/Layout";
import Title from "@components/organism/Title/index";
import Introduce from "@components/organism/IntroduceSelf/index";
import ListStack from "@data/stack";

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