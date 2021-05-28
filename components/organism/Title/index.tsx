import React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import TitleProps from "@components/organism/Title/type";

export default function Title({title,description}:TitleProps){
    return (
        <>
            <Container maxW="7xl" centerContent paddingTop={{ base :"7", md:"20", lg:"40"}} paddingLeft={{ base :"7", md:"20", lg:"40"}} paddingRight={{ base :"7", md:"20", lg:"40"}} paddingBottom={{ base :"10"}}>
                <Box mt={{base:"44", md:"28", lg:"10"}}>
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Heading as="h1" textAlign="center" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xl", md:"3xl", sm:"xl", lg:"6xl"}}>
                           {title}
                        </Heading>
                        <Text textAlign="center" mt={{ base :"1.5"}} fontSize={{ base :"small", md:"medium", lg:"medium"}}>{description}</Text>
                    </Fade>
                </Box>
            </Container>
        </>
    );
}