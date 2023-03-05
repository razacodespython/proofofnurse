
import CustomLink from './CustomLink';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Navigation() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            as={CustomLink}
            href={"/"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            ProofOfNurse
          </Text>
        </Flex>

        {/* <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        > */}
        <Flex
        minWidth={"md"}
        justifyContent={"flex-end"}
        >
          <Text
            as={CustomLink}
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Text>
          <Text
            marginLeft={"15px"}
            as={CustomLink}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            href={"/signup"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Text>
          </Flex>
        {/* </Stack> */}
      </Flex>
    </Box>
  );
}
