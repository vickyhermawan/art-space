import React from "react";
import { Box, Link, Text } from '@chakra-ui/react';

const Footer: React.FC = ({children}) => {
    return (
        <>
            <Box pt="4" pb="4" bottom="0" position="relative" as="footer" textAlign="center">
                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Vihermawan™ 2021 </Text>
                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium"> Develop use <Link color="teal.500" href="https://nextjs.org/">Next Js</Link>, <Link color="teal.500" href="https://chakra-ui.com">Chakra UI</Link> and Hosted on <Link color="teal.500" href="https://vercel.com">Vercel</Link> </Text>
            </Box>
        </>
    );
};

export default Footer;