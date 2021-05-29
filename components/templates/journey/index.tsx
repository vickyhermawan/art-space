import React from "react";
import Layout from "@components/organism/Layout/Layout";
import Title from "@components/organism/Title/index";
import Timeline from "@components/organism/Timeline/index";
import Journey from "@data/journey";

const Index: React.FC = ({ children }) => {
    return (
        <>
            <Layout>
                <Title title="Journey" description="This is vicky's journey from nothing to still learning..."/>
                <Timeline timeline={Journey}/>
            </Layout>
        </>
    );
};

export default Index;