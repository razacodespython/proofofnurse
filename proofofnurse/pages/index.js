import CustomLink from './components/CustomLink';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Grid,
  GridItem,
  Flex,
  Image,
  Icon,
  useColorModeValue,
  createIcon,
  Link

} from "@chakra-ui/react";

const counter = async () => {};

export default function Home() {
  return (
    <>
      <Container maxW={"3xl"} paddingBottom={"0"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20 }}
          paddingBottom={"0"}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            They take care of us <br />
            <Text as={"span"} color={"green.400"}>
              We take care of them
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Create privacy secured digital certificates to proof your skills as
            a medical professional on the blockchain. Hospitals can check your
            skills with a click of a button, without you sharing any
            information.
            {/* Gone are the days where you proof time and time again,
            that you say who you are and you can do what you do. */}
          </Text>

          <Stack
            direction={"row"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              as={CustomLink}
              href="/signup"
              colorScheme={"green"}
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
              Learn More
            </Button>
          </Stack>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
          </Stack>
        </Stack>
      </Container>
      <Grid templateColumns='repeat(3, 1fr)' 
      gap={6} padding={"10%"} paddingTop={"0"} marginTop={"0"}>
        <GridItem w='100%' h='10'>
          <Heading size={"md"} textAlign={"left"}>
            Benefit 1
          </Heading>
          <Text textAlign={"left"}>
            It lduis occaecat ex Lorem nostrud aliquip deserunt voluptate. Laboris mollit consectetur mollit minim sit esse.
          </Text>
          </GridItem>
        <GridItem w='100%' h='10'>
        <Heading size={"md"} textAlign={"left"}>
            Benefit 2
          </Heading>
          <Text textAlign={"left"}>
            It lduis occaecat ex Lorem nostrud aliquip deserunt voluptate. Laboris mollit consectetur mollit minim sit esse.
          </Text>
        </GridItem>
        <GridItem w='100%' h='10'>
        <Heading size={"md"} textAlign={"left"}>
            Benefit 3
          </Heading>
          <Text textAlign={"left"}>
            It lduis occaecat ex Lorem nostrud aliquip deserunt voluptate. Laboris mollit consectetur mollit minim sit esse.
          </Text>
        </GridItem>
        </Grid>
        <Flex justifyContent={"center"}>
          <Box width={"25%"} marginRight={"5%"}>
          <Text
            color={"grey"}
            fontSize={"sm"}
          >Culpa magna occaecat ex Lorem laborum eu.</Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Ea quis ipsum id <Box as={"span"} color={"green.400"}>proident nulla laboris irure pariatur.</Box> Eu non magna cupidatat culpa consequat pariatur non nulla incididunt non in minim.
            </Text>
          </Box>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            }
            fit={'cover'}
            align={'center'}
            w={'30%'}
            h={'30%'}
          />
        </Flex>
        <Flex marginTop={"5%"} justifyContent={"center"}>
        <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            }
            fit={'cover'}
            align={'center'}
            w={'30%'}
            h={'30%'}
          />
          <Box width={"25%"} marginLeft={"5%"}>
          <Text
            color={"grey"}
            fontSize={"sm"}
          >Culpa magna occaecat ex Lorem laborum eu.</Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Ea quis ipsum id <Box as={"span"} color={"green.400"}>proident nulla laboris irure pariatur.</Box> Eu non magna cupidatat culpa consequat pariatur non nulla incididunt non in minim.
            </Text>
          </Box>
        </Flex>
        <Flex marginTop={"50px"} textAlign={"center"} direction={"column"} justifyContent={"center"}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>Ullamco occaecat aliqua labore consectetur labore mollit adipisicing veniam consectetur.</Text>
        <Button
              as={CustomLink}
              href="/signup"
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              maxWidth={"max-content"}
              margin={"20px auto"}
            >
              Sign Up
            </Button>
            </Flex>
    </>
  );
}
