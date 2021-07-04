import React from "react";
import Fade from 'react-reveal/Fade';
import {ListStackProps} from '@components/organism/IntroduceSelf/type';
import { Container,Grid, GridItem,Image,Text,Heading, List, ListItem,Link } from "@chakra-ui/react";

export default function IntoduceSelf({listStack}: ListStackProps){
    return (
        <> 
            <Container maxW="5xl" centerContent paddingLeft={{ base :"7", md:"20", lg:"40"}} paddingRight={{ base :"7", md:"20", lg:"40"}} paddingBottom={{ base :"10"}}>
                <Grid
                    h="min-content"
                    w="full"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(8, 1fr)"
                    gap={4}
                    mb="8"
                >
                    <GridItem rowSpan={3} colSpan={{ base: 8, md: 2 }} w="full" position={{ base: "relative" }}>
                        <Fade duration={500} distance="30px" delay={300} fraction={0.4} bottom>
                            <Image 
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="200px" 
                                src="/img/profil.webp"
                                alt="Profile" 
                                loading="lazy"
                            />
                        </Fade>
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={{ base: 8, md: 6 }} w="full" textAlign={{ base: "center", md: "left" }}>
                        <Fade duration={500} distance="30px" delay={300} fraction={0.4} bottom>
                            <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "xs", md: "xs", lg: "sm" }} textAlign={{ base: "center", md: "justify" }} >
                                Hello, I'm Vicky Hermawan, who can be called Vicky. Currently, i am domiciled in Yogyakarta 
                                and studying at <Link href="https://ugm.ac.id/" isExternal color="teal.500" aria-label="link-ugm">Gadjah Mada University</Link> and working at a fintech company in Yogyakarta. 
                                I started working for the first time using the php programming language and the <Link href="https://laravel.com/" isExternal color="teal.500">Laravel</Link> framework. 
                                After that I tried to learn other things like  <Link href="https://expressjs.com/" isExternal color="teal.500" aria-label="link-express">Express Js</Link>, <Link href="https://reactjs.org/" isExternal color="teal.500" aria-label="link-react">React Js</Link>, <Link href="https://redux-saga.js.org/" isExternal color="teal.500" aria-label="link-redux">Redux</Link> and <Link href="https://graphql.org/" isExternal color="teal.500" aria-label="link-graphql">GraphQL</Link>. 
                                I'm currently using Vue Js and Golang as main stack as well as PostgreSQL and MongoDB 
                                databases in my current job. So this is stack that i use in development:
                            </Text>
                        </Fade>
                    </GridItem>
                </Grid>
                    <Grid
                        h="min-content"
                        w="full"
                        templateRows="repeat(3, 1fr)"
                        templateColumns="repeat(12, 1fr)"
                        gap={4}
                        mb="4"
                    >
                    {
                        (listStack ?? []).map(({ title,stacks },index) => {
                            return (
                                <GridItem rowSpan={3} colSpan={{ base: 6, md: 4 }} w="full" position={{ base: "relative" }} key={title}>
                                    <Fade duration={500} distance="30px" delay={300} fraction={0.4} bottom>
                                        <Heading as="h1"letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "xs", md: "xs", lg: "lg" }}>
                                            {title}
                                        </Heading>
                                        <List spacing={1}>
                                            {(stacks ?? []).map(({ stack }) => (
                                                <ListItem>
                                                    <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "xs", md: "xs", lg: "sm" }} color="gray.500">{stack}</Text>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Fade>
                                </GridItem>
                                )
                            })
                        }
                    </Grid>
            </Container>
        </>
    );
}