import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

import CustomLink from './CustomLink';
  
  export default function GridCard({job}) {
    console.log({job})
    return (
      <CustomLink href={`/listings/${job.id}`}>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={`280px`}
          height={`200px`}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={job.image}
            />
          </Flex>
          <Stack>
          <Text>{job.listing}</Text>
          <Text>{job.location}</Text>
          <Text>{job.name}</Text>
          </Stack>
        </Stack>
      </Center>
      </CustomLink>
    );
  }