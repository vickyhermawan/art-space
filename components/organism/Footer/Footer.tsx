import React from "react";
import { Box, Link, Text,Stack, Button, Center } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';

const Footer: React.FC = ({children}) => {
    return (
        <>
            <Box pt="4" pb="4" bottom="0" position="relative" as="footer" textAlign="center">
                <Center mb={2}>
                    <Stack direction="row" spacing={4}>
                        <Link href="https://twitter.com/vihermawan" isExternal aria-label="link-twitter">
                            <Button colorScheme="teal" variant="outline" size="xs" aria-label="button-twitter">
                                <FaTwitter />
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/vicky-hermawan/" isExternal aria-label="link-linkedin">
                            <Button colorScheme="teal" variant="outline" size="xs" aria-label="button-linkedin">
                                <FaLinkedin />
                            </Button>
                        </Link>
                    </Stack>
                </Center>
                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Vihermawan™ 2021 </Text>
                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium"> Develop use <Link color="teal.500" href="https://nextjs.org/">Next Js</Link>, <Link color="teal.500" href="https://chakra-ui.com">Chakra UI</Link> and Hosted on <Link color="teal.500" href="https://vercel.com">Vercel</Link> </Text>
            </Box>
        </>
    );
};

export default Footer;