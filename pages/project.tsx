import React from "react";
import Layout from "@components/organism/Layout/Layout";
import { SimpleGrid, Box } from "@chakra-ui/react"

const Project: React.FC = ({ children }) => {
    return (
        <>
             <Layout>
                <SimpleGrid columns={2} spacing={10}>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px">Project</Box>
                    <Box bg="tomato" height="80px"></Box>
                </SimpleGrid>
            </Layout>
        </>
    );
};

export default Project;
