import React from "react";
import Fade from 'react-reveal/Fade';
import {TimelineProps} from '@components/organism/Timeline/type';
import Achievement from '@components/organism/Achievement/index';
import { List, ListItem, VStack,Container,Heading } from '@chakra-ui/react';

export default function Timeline ({timeline}:TimelineProps) {
    return(
        <Container maxW="5xl" centerContent paddingLeft={{ base :"7", md:"20", lg:"40"}} paddingRight={{ base :"7", md:"20", lg:"40"}} paddingBottom={{ base :"20"}} minH="90vh">
            <VStack
                width='full'
                spacing={5}
                alignItems='flex-start'
            >
                <List spacing={3}>
                {(timeline ?? []).map(({ year, achievements }) => (
                    <ListItem key={year}>
                        <Fade duration={600} distance="30px" fraction={0.4} bottom>
                            <Heading as="h1" lineHeight={"-.0.001rem"} fontSize={{ base :"md", md:"2xl"}}>{year}</Heading>
                            <Achievement achievements={achievements}/>
                        </Fade>
                    </ListItem>
                    ))}
                </List>
            </VStack>
        </Container>
    )
}
