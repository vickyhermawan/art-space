import React from "react";
import Fade from 'react-reveal/Fade';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {PortofolioProps} from '@components/organism/List/type';
import { Container, Flex,Grid, GridItem,Heading,Image,Text ,Box,Tag,List,ListItem,Link,useColorMode } from "@chakra-ui/react";

export default function ListPortofolio({portofolio}: PortofolioProps){
    const { colorMode } = useColorMode();
    return (
        <> 
            <Container maxW="6xl" centerContent paddingLeft={{ base :"7", md:"20", lg:"40"}} paddingRight={{ base :"7", md:"20", lg:"40"}} paddingBottom={{ base :"10"}}>
            <List paddingBottom={4}>
            {
                (portofolio ?? []).map(({ title,description,link,image,tags },index) => {
                const isLastElement = index === portofolio.length - 1
                const shouldConnectDots = portofolio.length > 1
                return (
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <ListItem
                            key={title}
                            zIndex={1}
                            paddingTop={4}
                            position='relative'
                        >   
                            {
                                shouldConnectDots ?  
                                <Flex
                                    width="full"
                                    zIndex={-1}
                                    height='0.5px'
                                    backgroundColor='gray.100'
                                /> : null 
                            }
                            <Grid
                                width="full"
                                templateRows="repeat(3, 1fr)"
                                templateColumns="repeat(12, 1fr)"
                                pt="3" 
                                pb="3"
                                gap={4}
                                key={title}
                            >
                                <GridItem rowSpan={3} colSpan={{base: 12, sm : 8}}>
                                    <Box p="2" key={title}>
                                        <Link href={link} isExternal aria-label={title}><Heading size="md">{title} <ExternalLinkIcon w={4} h={4}/></Heading></Link>
                                        <Text
                                            fontSize={{base: "small", md:"medium"}}
                                            width='full'
                                            variant='regular'
                                            pb={2}
                                            color={colorMode === "light" ? "gray.600" : "gray.300"}
                                        >
                                        {description}
                                        </Text>
                                        {(tags ?? []).map(({ tag }) => (
                                            <Tag size="sm" mr={2}>{tag}</Tag>
                                        ))}
                                    </Box>
                                </GridItem>
                                <GridItem rowSpan={3} colSpan={{base: 12, sm : 4}}>
                                    <Image 
                                        boxSize="full"
                                        objectFit="cover"
                                        borderRadius="md"
                                        width="full"
                                        height="full" 
                                        src={image}
                                        alt="Dan Abramov" 
                                        loading="lazy"
                                    />
                                </GridItem>
                            </Grid>
                            {
                                isLastElement ?  
                                <Flex
                                    width="full"
                                    zIndex={-1}
                                    height='0.5px'
                                    backgroundColor='gray.100'
                                /> : null 
                            }
                        </ListItem>
                    </Fade>
                    )
                })
              }
              </List>
        </Container>
        </>
    );
}