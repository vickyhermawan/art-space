import React from "react";
import Journey from "@data/journey";

import dynamic from 'next/dynamic';

const Title = dynamic(() => import('@components/organism/Title/index'));
const Layout = dynamic(() => import('@components/organism/Layout/Layout'));
const Timeline = dynamic(() => import('@components/organism/Timeline/index'));

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