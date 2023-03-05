import { useState } from 'react';
import CustomLink from './components/CustomLink';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Select,
  Text,
  Box
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'

export default function Profile() {
  const [fullName, setFullname] = useState("");
    const [employmentStatus, setEmploymentStatus] = useState("");
    const [licenseID, setLicenseID] = useState("");
    const [certification, setCertification] = useState("");
    const [date, setDate] = useState("");
    console.log({employmentStatus, fullName, licenseID, certification, date})
    const handleChange = (event) => {
      setEmploymentStatus(event.target.value)
    }
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={`20px`} w={'full'} maxW={'md'}>
        <Heading>Professional Profile</Heading>
        <FormControl marginBottom={`20px`}>
        <FormLabel>Name</FormLabel>
        <Input isDisabled={true} marginBottom={`20px`} placeholder='Full name' variant={'flushed'} type='text' value={'Alice Chains'} onChange={(e) => {setFullname(e.target.value)}} />
        <FormLabel>License ID</FormLabel>
        <Input isDisabled={true} marginBottom={`20px`} placeholder='License ID' variant={'flushed'} type='text' value={'8827AA'} onChange={(e) => {setLicenseID(e.target.value)}}  />
        <FormLabel>Credential ID</FormLabel>
        <Input isDisabled={true} marginBottom={`20px`} placeholder='Employment Status' variant={'flushed'} type='text' value={'8JJIO87'} onChange={(e) => {setLicenseID(e.target.value)}}  />
        <FormLabel>Certification ID</FormLabel>
        <Input isDisabled={true} marginBottom={`20px`} placeholder='Certification' variant={'flushed'} type='text' value={'877BVC'} onChange={(e) => {setCertification(e.target.value)}} />
        
        <Text>Verification Status:</Text>
        <Text marginBottom={`20px`}>Unverified</Text>
        <Button
        as={CustomLink}
        href="/jobs"
              colorScheme={"green"}
              marginRight={"10px"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Apply to Jobs
            </Button>
      </FormControl> 
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1587500154541-1cafd74f0efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          }
          height={"100vh"}
        />
      </Flex>
    </Stack>
  );
}