import React from "react";
import {AchievementsProps} from '@components/organism/Timeline/type';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { List, HStack, ListItem, VStack, Flex,Text,Heading,Center,Circle } from '@chakra-ui/react';

export default function Achievements ({ achievements }: AchievementsProps) {
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
                        h={isLastElement ? "0" : "full"}
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
                        <CheckCircleIcon w={3} h={3} color="blue.500"/>
                    </Center>
                </Circle>

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
                      {title}
                    </Heading>
  
                    <Text
                      size='sm'
                      width='full'
                      variant='regular'
                      textAlign='left'
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
  