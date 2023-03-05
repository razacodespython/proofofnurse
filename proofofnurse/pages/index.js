import CustomLink from "./components/CustomLink";
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
          ></Stack>
        </Stack>
      </Container>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        padding={"10%"}
        paddingTop={"0"}
        marginTop={"0"}
      >
        <GridItem w="100%" h="10">
          <Heading size={"md"} textAlign={"left"}>
            Decrease Time
          </Heading>
          <Text textAlign={"left"}>
            Cut the time to get through the verification process to instant, by
            using verified credentials on chain
          </Text>
        </GridItem>
        <GridItem w="100%" h="10">
          <Heading size={"md"} textAlign={"left"}>
            Security
          </Heading>
          <Text textAlign={"left"}>
            Credentials can't be hacked and are stored decentral
          </Text>
        </GridItem>
        <GridItem w="100%" h="10">
          <Heading size={"md"} textAlign={"left"}>
            Data Protection
          </Heading>
          <Text textAlign={"left"}>
            Your personal data is not shared with hospitals, recruitment
            agencies, ect.
          </Text>
        </GridItem>
      </Grid>
      <Flex justifyContent={"center"}>
        <Box width={"25%"} marginRight={"5%"}>
          <Text color={"grey"} fontSize={"sm"}>
            Using Social Logins
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Anyone can use our platform{" "}
            <Box as={"span"} color={"green.400"}>
              and harness the power{" "}
            </Box>{" "}
            of decentralized identity.
          </Text>
        </Box>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          fit={"cover"}
          align={"center"}
          w={"30%"}
          h={"30%"}
        />
      </Flex>
      <Flex marginTop={"5%"} justifyContent={"center"}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          fit={"cover"}
          align={"center"}
          w={"30%"}
          h={"30%"}
        />
        <Box width={"25%"} marginLeft={"5%"}>
          <Text color={"grey"} fontSize={"sm"}>
            Hire Faster
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Save time{" "}
            <Box as={"span"} color={"green.400"}>
              reduce costs
            </Box>{" "}
            while ensuring your new hires' credibility
          </Text>
        </Box>
      </Flex>
      <Flex
        marginTop={"50px"}
        textAlign={"center"}
        direction={"column"}
        justifyContent={"center"}
      >
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Create your credentials now and never worry about it again.
        </Text>
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
