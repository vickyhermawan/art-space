import React from "react";
import {AchievementsProps} from '@components/organism/Timeline/type';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { List, HStack, ListItem, VStack, Flex,Text,Heading,Center,Circle,useColorMode } from '@chakra-ui/react';

export default function Achievements ({ achievements }: AchievementsProps) {
  const { colorMode } = useColorMode();
    return (
      <List paddingBottom={4}>
        {
          (achievements ?? []).map(({ title, description }, index) => {
            const isLastElement = index === achievements.length - 1
            const isFirstElement = index === 0
            const shouldConnectDots = achievements.length > 1
  
            return (
              <ListItem
                key={title}
                zIndex={1}
                paddingTop={4}
                position='relative'
              >
                {
                  shouldConnectDots
                    ? <Flex
                        left='15px'
                        top={isFirstElement ? 5 : 0}
                        width='1px'
                        bottom={0}
                        zIndex={-1}
                        height={isLastElement ? 5 : 'unset'}
                        position='absolute'
                        backgroundColor='gray.100'
                    />
                    : null
                  }
  
                <HStack
                  width='full'
                  alignItems='flex-start'
                  justifyContent='flex-start'
                >
                  <Circle size={8} bg="gray.200" marginTop={1}>
                    <Center>
                        <ArrowForwardIcon w={3} h={3} color="blue.500"/>
                    </Center>
                </Circle>

                  <VStack
                    width='full'
                    spacing={2}
                    textAlign='left'
                    p={3}
                  >
                    <Heading
                      width='full'
                      fontSize={{base: "small", md:"medium"}}
                      textAlign='left'
                    >
                      {title}
                    </Heading>
  
                    <Text
                      fontSize={{base: "small", md:"medium"}}
                      width='full'
                      variant='regular'
                      textAlign='left'
                      color={colorMode === "light" ? "gray.600" : "gray.300"}
                    >
                      {description}
                    </Text>
                  </VStack>
                </HStack>
              </ListItem>
            )
          })
        }
      </List>
    )
  }
  