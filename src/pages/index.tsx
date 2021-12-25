import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react'
import { Greeting, Layout } from '../components'
import {
  buttonTextColor,
  commentNumberColor,
  nameLinkColor,
  textColor,
  yearColor,
} from '../constants'
import FeatureList from '../components/FeatureList'

const Index = () => (
  <>
    <Layout>
      <Greeting />

      <HStack mb="14">
        <Box>Game 1</Box>
        <Box>Game 2</Box>
        <Box>Game 3</Box>
        <Box>Game 4</Box>
        <Box>Game 5</Box>
        <Box>Game 6</Box>
      </HStack>

      <Box mb="14">
        <FeatureList />
      </Box>

      <Box mb="10">
        <Text>Just reviewed...</Text>
        <Text>(stat of total games logged)</Text>
        <Text>(list of latest reviews)</Text>
      </Box>

      <Flex mb="10" direction="column" alignItems="center">
        <Text fontSize="2xl" mb="2" color={nameLinkColor}>
          Write and share reviews. Compile your own lists. Share your life in
          games.
        </Text>

        <Text color={yearColor}>
          Below are some popular reviews and lists from this week.{' '}
          <Link color={buttonTextColor}>
            <b>Sign up</b>
          </Link>{' '}
          to create your own.
        </Text>
      </Flex>

      <Text color={textColor}>Popular reviews this week</Text>
      <Text color={commentNumberColor}>More</Text>
      <Text>(list of popular reviews)</Text>
      <Text color={textColor}>Popular lists</Text>
      <Text color={commentNumberColor}>More</Text>
      <Text>(list of popular lists)</Text>
      <Text color={textColor}>Popular reviewers</Text>
      <Text color={commentNumberColor}>More</Text>
      <Text>(list of popular reviewers)</Text>
    </Layout>
  </>
)

export default Index
