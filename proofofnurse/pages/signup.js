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

export default function signup() {
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
        <Heading>Professional Sign Up</Heading>
        <FormControl marginBottom={`20px`}>
        <Input marginBottom={`20px`} placeholder='Full name' variant={'flushed'} type='text' value={fullName} onChange={(e) => {setFullname(e.target.value)}} />
        <Input marginBottom={`20px`} placeholder='License ID' variant={'flushed'} type='text' value={licenseID} onChange={(e) => {setLicenseID(e.target.value)}}  />
        <Select
        marginBottom={`20px`}
        value={employmentStatus}
        onChange={handleChange}
        placeholder="Employment Status"
        variant={'flushed'}
        >
        <option value="Employed">Employed</option>
        <option value="Unemployed">Unemployed</option>
        </Select>
        <Input marginBottom={`20px`} placeholder='Certification' variant={'flushed'} type='text' value={certification} onChange={(e) => {setCertification(e.target.value)}} />
        <Input marginBottom={`20px`} placeholder='Certification Date' type={"date"} variant={'flushed'} value={date} onChange={(e) => {setDate(e.target.value)}}  />
        <Text marginBottom={`20px`}> Add Certificate <Box as={'span'}><AddIcon /> </Box></Text>
        <Button
              colorScheme={"green"}
              marginRight={"10px"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Sign Up
            </Button>
            <Button
              as={CustomLink}
              href="/company"
              backgroundColor={"white"}
              border={"1px"}
              borderColor={"black"}
              rounded={"full"}
              px={6}
            >
              Close
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