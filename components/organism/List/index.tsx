import React from "react";
import { Container, Grid, GridItem,Text,Heading,Image } from "@chakra-ui/react";

export default function List({}){
    return (
        <>
            <Container maxW="7xl" centerContent paddingLeft={{ base :"7", md:"20", lg:"40"}} paddingRight={{ base :"7", md:"20", lg:"40"}} paddingBottom={{ base :"10"}}>
                <Grid
                    h="min-content"
                    w="full"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(8, 1fr)"
                    gap={4}
                    mb="4"
                >
                    <GridItem rowSpan={3} colSpan={{ base: 8, lg: 4 }} w="full" h="full" bg="red">
                    <Image boxSize="200px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                    <Heading
                      width='full'
                      fontSize={{base: "small", md:"medium"}}
                      textAlign='left'
                    >
                      Information System PSKS
                    </Heading>
                    <Text
                      fontSize={{base: "small", md:"medium"}}
                      width='full'
                      variant='regular'
                      textAlign='left'
                      color="gray.500"
                    >
                        PSKS is an information system used by the Ministry of Social Affairs to collect data on the community environment.
                    </Text>
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={{ base: 8, lg: 4 }} w="full" h="full" bg="red">
                        
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}