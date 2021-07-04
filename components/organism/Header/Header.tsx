import Link from 'next/link';
import useSound from 'use-sound';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import { Box, Heading, Flex, Text, useColorMode, IconButton, Button, useDisclosure, Spacer, Kbd } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const MenuItems = dynamic(() => import('@components/atoms/MenuItems/MenuItems'))

const Header: React.FC = props => {
    const router = useRouter();
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [play] = useSound("/sounds/pop.mp3");

    useEffect(() => {
        window.addEventListener('keypress', e => {
            if(e.key === 'H' || e.key === 'h'){
                onClose();
                router.push('/home')
            }else if(e.key === 'J' || e.key === 'j'){
                onClose();
                router.push('/journey')
            }else if(e.key === 'P' || e.key === 'p'){
                onClose();
                router.push('/project')
            }else if(e.key === 'A' || e.key === 'a'){
                onClose();
                router.push('/about')
            }
        });
    }, []);

    const handleDarkMode = () => {
        play();
        toggleColorMode();
    }

    return (
        <>
            <Flex
                as="header"
                align="center"
                position="fixed"
                zIndex="9999"
                padding="1.5rem"
                width="full"
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "black" : "white"}
                {...props}
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="md" letterSpacing={"-.0.01rem"} fontSize={{ base: "sm", md: "md", sm: "md", lg: "md" }}>
                        <Link href="/">Vihermawan</Link>
                    </Heading>
                </Flex>
                <Spacer />
                <Box
                    display={{ base: "none", md: "flex" }}
                    mt={{ base: 4, md: 0 }}
                >
                  
                    <MenuItems>
                        Home
                    </MenuItems>
                    <MenuItems>
                        Journey
                    </MenuItems>
                    <MenuItems>
                        Project
                    </MenuItems>
                    <MenuItems>
                        About
                    </MenuItems>
                </Box>
                <Spacer />
                <Box
                    display={{ base: "none", md: "flex" }}
                    mt={{ base: 4, md: 0 }}
                    alignContent="center"
                >
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={()=>handleDarkMode()} aria-label="button" />
                </Box>
                <Box display={{ base: "block", md: "none", lg: "none" }}>
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={()=>handleDarkMode()} aria-label="button" />
                    <Button size="xs" bg="transparent" onClick={onOpen} aria-label="button-modal">👋</Button>
                </Box>
            </Flex>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                size="xs"
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Flex
                            align="center"
                            width="full"
                            wrap="wrap"
                            heigth="full"
                        >
                            <Box as="button" textAlign="left" aria-label="button-modal" onClick={()=>router.push('/home')}>
                                <Text fontSize="xs" paddingX="1" fontWeight="bold"> Home</Text>
                            </Box>
                            <Spacer />
                            <Box>
                                <Kbd marginRight="1">#</Kbd>
                            </Box>
                        </Flex>
                        <Flex
                            align="center"
                            width="full"
                            wrap="wrap"
                            heigth="full"
                        >
                            <Box as="button" textAlign="left" aria-label="button-modal" onClick={()=>router.push('/journey')}>
                                <Text fontSize="xs" paddingX="1" fontWeight="bold"> Journey</Text>
                            </Box>
                            <Spacer />
                            <Box>
                                <Kbd marginRight="1">J</Kbd>
                            </Box>
                        </Flex>
                        <Flex
                            align="center"
                            width="full"
                            wrap="wrap"
                            heigth="full"
                        >
                            <Box as="button" textAlign="left" aria-label="button-modal" onClick={()=>router.push('/project')}>
                                <Text fontSize="xs" paddingX="1" fontWeight="bold"> Project</Text>
                            </Box>
                            <Spacer />
                            <Box>
                                <Kbd marginRight="1">P</Kbd>
                            </Box>
                        </Flex>
                        <Flex
                            align="center"
                            width="full"
                            wrap="wrap"
                            heigth="full"
                        >
                            <Box as="button" textAlign="left" aria-label="button-modal" onClick={()=>router.push('/about')}>
                                <Text fontSize="xs" paddingX="1" fontWeight="bold"> About</Text>
                            </Box>
                            <Spacer />
                            <Box>
                                <Kbd marginRight="1">A</Kbd>
                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Header;
