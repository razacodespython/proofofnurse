import jobData from "../../data/jobData.json";
import { Box,
    Container,
    Stack,
    Text,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
    Image, } from "@chakra-ui/react"

export const getStaticProps = async ({ params }) => {
    const jobs = jobData.filter(p => p.id.toString() === params.id)
    return {
        props: {
            job: jobs[0]
        }
    }
}

export const getStaticPaths = async () => {
    const paths = jobData.map(job => ({
        params: {id: job.id.toString()}
    }))
    return {paths, fallback: false}
}

const Listings = ({job}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={job.image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {job.listing}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}>
            <Stack>
                <Text>Hospital Name</Text>
            <Heading textAlign={`left`}>
                {job.name}
              </Heading>
              <Text>Location</Text>
            <Heading textAlign={`left`}>
                {job.location}
              </Heading>
              <Text>Job description</Text>
              <Text fontSize={'lg'} marginBottom={`40px`}>
                {job.description}
              </Text>
            </Stack>
          </Stack>
          <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              onClick={onOpen}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Apply for Job
            </Button>
        </Stack>
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Heading textAlign={`center`}>Confirm Your Application</Heading>
          </ModalBody>
          <ModalFooter justifyContent={`center`}>
          <Button
              colorScheme={"green"}
              marginRight={"10px"}
              onClick={onClose}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Confirm
            </Button>
            <Button
              backgroundColor={"white"}
              onClick={onClose}
              border={"1px"}
              borderColor={"black"}
              rounded={"full"}
              px={6}
            >
              Close
            </Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
    )
}

export default Listings;