import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Text, useColorMode, IconButton, Button, useDisclosure, Divider, Spacer, Kbd } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react";
import { Link as LinkScroll } from "react-scroll";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const MenuItems = dynamic(() => import('@components/atoms/MenuItems/MenuItems'))

const Header: React.FC = props => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollActive, setScrollActive] = useState<Boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
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
                    {/* <ModalBody>
                        <Flex
                            align="center"
                            width="full"
                            wrap="wrap"
                            heigth="full"
                        >
                            <LinkScroll
                                activeClass="active"
                                to="prolouge"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                                    <Text fontSize="xs" paddingX="1" fontWeight="bold"> Prolouge</Text>
                                </Box>
                            </LinkScroll>
                            <Spacer />
                            <Kbd marginRight="1">D</Kbd>
                            <Divider />
                            <LinkScroll
                                activeClass="active"
                                to="achievement"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                                    <Text fontSize="xs" paddingX="1" fontWeight="bold">Achievement</Text>
                                </Box>
                            </LinkScroll>
                            <Spacer />
                            <Kbd marginRight="1">P</Kbd>
                            <Divider />
                            <LinkScroll
                                activeClass="active"
                                to="gallery"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                                    <Text fontSize="xs" paddingX="1" fontWeight="bold">Gallery</Text>
                                </Box>
                            </LinkScroll>
                            <Spacer />
                            <Kbd marginRight="1">N</Kbd>
                            <Divider />
                            <LinkScroll
                                activeClass="active"
                                to="song"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                                    <Text fontSize="xs" paddingX="1" fontWeight="bold"> Songs</Text>
                                </Box>
                            </LinkScroll>
                            <Spacer />
                            <Kbd marginRight="1">G</Kbd>
                        </Flex>
                    </ModalBody> */}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Header;
