import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
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
    const [scrollActive, setScrollActive] = useState<Boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
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
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} aria-label="button" />
                </Box>
                <Box display={{ base: "block", md: "none", lg: "none" }}>
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} aria-label="button" />
                    <Button size="xs" bg="transparent" onClick={onOpen}>👋</Button>
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
                            <Box as="button" textAlign="left">
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
                            <Box as="button" textAlign="left">
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
                            <Box as="button" textAlign="left">
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
                            <Box as="button" textAlign="left">
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
