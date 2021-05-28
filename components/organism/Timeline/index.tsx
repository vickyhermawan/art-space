import React from "react";
import { List, HStack, ListItem, VStack, Box, Flex,Text,Container,Heading } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

export default function Timeline ({}) {
    return(
        <Container maxW="7xl" centerContent paddingLeft={{ base :"7", md:"20", lg:"40"}} paddingRight={{ base :"7", md:"20", lg:"40"}} paddingBottom={{ base :"20"}} minH="90vh">
            <VStack
                width='full'
                spacing={5}
                alignItems='flex-start'
            >
                <List spacing={3}>

                    <ListItem>
                        {/* <ListIcon as={FaTwitter} color="green.500" /> */}
                        <Heading>2021</Heading>
                        <List paddingBottom={4}>
                            <ListItem
                                // key={title}
                                zIndex={1}
                                paddingTop={4}
                                position='relative'
                            >
                                 <Flex
                                    left='5px'
                                    top={5}
                                    width='2.5px'
                                    bottom={0}
                                    height={5}
                                    zIndex={-1}
                                    position='absolute'
                                    backgroundColor='gray.100'
                                />
                                <HStack
                                    width='full'
                                    alignItems='flex-start'
                                    justifyContent='flex-start'
                                >
                                    <Box
                                    minWidth='14px'
                                    height='14px'
                                    marginTop={1}
                                    borderRadius='full'
                                    bgGradient='linear(to-r, green.400, green.500, blue.100)'
                                    />

                                    <VStack
                                    width='full'
                                    spacing={2}
                                    textAlign='left'
                                    >
                                    <Heading
                                        width='full'
                                        size='xs'
                                        textAlign='left'
                                    >
                                        tes
                                    </Heading>

                                    <Text
                                        size='sm'
                                        width='full'
                                        variant='regular'
                                        textAlign='left'
                                    >
                                        des
                                    </Text>
                                    </VStack>
                                </HStack>
                            </ListItem>
                            <ListItem
                                // key={title}
                                zIndex={1}
                                paddingTop={4}
                                position='relative'
                            >
                                 <Flex
                                    left='5px'
                                    top={5}
                                    width='2.5px'
                                    bottom={0}
                                    height={5}
                                    zIndex={-1}
                                    position='absolute'
                                    backgroundColor='gray.100'
                                />
                                <HStack
                                    width='full'
                                    alignItems='flex-start'
                                    justifyContent='flex-start'
                                >
                                    <Box
                                    minWidth='14px'
                                    height='14px'
                                    marginTop={1}
                                    borderRadius='full'
                                    bgGradient='linear(to-r, green.400, green.500, blue.100)'
                                    />

                                    <VStack
                                    width='full'
                                    spacing={2}
                                    textAlign='left'
                                    >
                                    <Heading
                                        width='full'
                                        size='xs'
                                        textAlign='left'
                                    >
                                        tes
                                    </Heading>

                                    <Text
                                        size='sm'
                                        width='full'
                                        variant='regular'
                                        textAlign='left'
                                    >
                                        des
                                    </Text>
                                    </VStack>
                                </HStack>
                            </ListItem>
                        </List>
                    </ListItem>
                    {/* <ListItem>
                        <ListIcon as={FaTwitter} color="green.500" />
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaTwitter} color="green.500" />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    {/* <ListItem>
                        <ListIcon as={FaTwitter} color="green.500" />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem> */}
                </List>
            </VStack>
        </Container>
    )
}
