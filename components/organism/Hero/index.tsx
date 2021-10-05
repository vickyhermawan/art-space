import React from "react";
import useSound from 'use-sound';
import Fade from 'react-reveal/Fade';
import { FaTwitter } from 'react-icons/fa';
import { DownloadIcon } from '@chakra-ui/icons';
import style from '@styles/Gradient.module.css';
import { Container, Box, Heading, Link, Text,Stack, Button,Center,useColorMode } from "@chakra-ui/react";

const Hero : React.FC = props =>{

    const [play] = useSound("/sounds/pop.mp3");
    const { colorMode } = useColorMode();

    return (
        <>
            <Container maxW="7xl" centerContent paddingTop={{ base :"7", md:"20", lg:"40"}} paddingLeft={{ base :"7", md:"20", lg:"40"}} paddingRight={{ base :"7", md:"20", lg:"40"}} paddingBottom={{ base :"20"}} minH="88vh">
                <Box mt={{base:"44", md:"24"}}>
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Heading as="h1" textAlign="center" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xl", md:"3xl", sm:"xl", lg:"6xl"}}>
                            Welcome to Vihermawan's, He is a <Link className={style.transition} href="#" bgClip="text">Developer</Link> also <Link className={style.transition} href="#" bgClip="text">Student</Link> who love to learn new things 
                        </Heading>
                    </Fade>
                    <Fade duration={600} distance="30px" fraction={0.4} bottom>
                        <Text textAlign="center" mt={{ base :"1.5"}} fontSize={{ base :"small", md:"medium", lg:"medium"}} color={colorMode === "light" ? "gray.600" : "gray.300"}> He also a workaholic person, and have 2 experience as Fullstack Developer. If you have any chance to collaborate or project he will glad to hear it.</Text>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Center mt="4">
                            <Stack direction="row" spacing={4}>
                                <Link href="https://drive.google.com/file/d/1s1ePLn7bXT3M25hLKPybgU66O5xnRCca/view" isExternal aria-label="link-portofolio">
                                    <Button leftIcon={<DownloadIcon />} colorScheme="facebook" variant="solid" size="sm" onClick={()=> play()} aria-label="button-hero">
                                        Portofolio
                                    </Button>
                                </Link>
                                <Link href="https://twitter.com/vihermawan" isExternal aria-label="link-twitter">
                                    <Button rightIcon={<FaTwitter />} colorScheme="facebook" variant="outline" size="sm" onClick={()=> play()} aria-label="button-hero">
                                        Connect
                                    </Button>
                                </Link>
                            </Stack>
                        </Center>
                    </Fade>
                </Box>
            </Container>
        </>
    );
}

export default Hero;