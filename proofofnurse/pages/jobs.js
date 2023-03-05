import jobData from "../data/jobData.json"
import { Grid, GridItem, Flex, Stack, Heading, Box, Text } from '@chakra-ui/react'
import CustomLink from './components/CustomLink'
import GridCard from "./components/GridCard"

export const getStaticProps = async () => {
    return {
        props: {
            jobData: jobData
        }
    }
}

export default function jobs ({ jobData }) {
    console.log(jobData)
    return (
        <Flex
        >
            <Stack marginLeft={`5%`} marginRight={`5%`}>
                <Heading marginBottom={`20px`}>Job Marketplace</Heading>

                <Box>
                <Text>License ID</Text>
                <Text marginBottom={`40px`}>1231AZ87HG</Text>
                </Box>

                <Box>
                <Text>Verification Status</Text>
                <Text marginBottom={`40px`}>Verified</Text>
                </Box>

                <Box>
                <Text>Employment Status</Text>
                <Text marginBottom={`40px`}>Employed</Text>
                </Box>
            </Stack>
        <Grid templateColumns='repeat(3, 1fr)' gap={5}>
            {jobData.map((job) => <GridCard
            as={CustomLink}
            href="/signup" 
            key={job.id}
            job={job}
            >
                {job.name}
            </GridCard>)}
        </Grid>
        </Flex>
    )
}


