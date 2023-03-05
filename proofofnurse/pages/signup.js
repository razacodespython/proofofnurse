import { useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import CustomLink from "./components/CustomLink";
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
  Box,
  useToast,
} from "@chakra-ui/react";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { useSigner, useSignMessage } from "wagmi";
import { SiweMessage } from "@spruceid/ssx";
import { AddIcon } from "@chakra-ui/icons";

import Abi from "../abi.json";

const contractAddress = "0x7ae8C5Faa17a1055Afc5Cc0d75C9EC3D077048Bc";

export default function Signup() {
  const router = useRouter();
  const toast = useToast();
  const [fullName, setFullname] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [licenseID, setLicenseID] = useState("");
  const [certification, setCertification] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    setEmploymentStatus(event.target.value);
  };

  const { signMessageAsync } = useSignMessage();

  const { data, isSuccess: providerLoaded } = useSigner();

  const handleSignIn = async () => {
    try {
      // ssx features
      const daoLogin = false;
      const resolveEns = false;
      const callbackUrl = "/protected";

      const message = new SiweMessage({
        domain: globalThis?.location?.host,
        address: await data?.getAddress(),
        statement: "Sign in with Ethereum",
        uri: globalThis?.location.origin,
        version: "1",
        chainId: data?.provider?.network?.chainId,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn("credentials", {
        message: message.prepareMessage(),
        redirect: false,
        signature,
        daoLogin,
        resolveEns,
        callbackUrl,
      });
      mintNFT();
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
  };

  const mintNFT = async () => {
    const { ethereum } = window;
    if (ethereum) {
      toast({
        title: "Creating Account and NFT.",
        description: "Hang on, we're getting your account created right now!",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const connectedContract = new ethers.Contract(
        contractAddress,
        Abi,
        signer
      );
      console.log("minting");
      const nft = await connectedContract.safeMint(
        address,
        Math.floor(Math.random() * 101)
      );
      console.log({ nft });
      toast({
        title: "Account created.",
        description: `We've created your account for you at hash ${nft.hash} please wait as we redirect you to your profile!`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setTimeout(() => {
        router.push("/profile");
      }, "5000");
    } else {
      alert("No Wallet Found");
    }
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={`20px`} w={"full"} maxW={"md"}>
          <Heading>Professional Sign Up</Heading>
          <FormControl marginBottom={`20px`}>
            <Input
              marginBottom={`20px`}
              placeholder="Full name"
              variant={"flushed"}
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
            <Input
              marginBottom={`20px`}
              placeholder="License ID"
              variant={"flushed"}
              type="text"
              value={licenseID}
              onChange={(e) => {
                setLicenseID(e.target.value);
              }}
            />
            <Select
              marginBottom={`20px`}
              value={employmentStatus}
              onChange={handleChange}
              placeholder="Employment Status"
              variant={"flushed"}
            >
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
            </Select>
            <Input
              marginBottom={`20px`}
              placeholder="Certification"
              variant={"flushed"}
              type="text"
              value={certification}
              onChange={(e) => {
                setCertification(e.target.value);
              }}
            />
            <Input
              marginBottom={`20px`}
              placeholder="Certification Date"
              type={"date"}
              variant={"flushed"}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <Text marginBottom={`20px`}>
              {" "}
              Add Certificate{" "}
              <Box as={"span"}>
                <AddIcon />{" "}
              </Box>
            </Text>
            <Button
              // as={CustomLink}
              // href={"/profile"}
              onClick={() => handleSignIn()}
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
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1587500154541-1cafd74f0efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          height={"100vh"}
        />
      </Flex>
    </Stack>
  );
}
