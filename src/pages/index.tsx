import NextLink from 'next/link'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  LightMode,
  Link,
  Text,
} from '@chakra-ui/react'
import {
  AiFillAppstore,
  AiFillCalendar,
  AiFillEye,
  AiFillHeart,
  AiFillStar,
} from 'react-icons/ai'
import { GrTextAlignLeft } from 'react-icons/gr'
import { Layout } from '../components'
import {
  buttonTextColor,
  commentNumberColor,
  nameLinkColor,
  textColor,
  welcomeColor,
  yearColor,
} from '../constants'

const Index = () => (
  <Layout>
    <Flex direction="column" alignItems="center" mb="10">
      <Heading as="h2" size="lg" fontFamily="serif" mb="3">
        Track games you&#39;ve played.
      </Heading>
      <Heading as="h2" size="lg" fontFamily="serif" mb="3">
        Save those you want to play.
      </Heading>
      <Heading as="h2" size="lg" fontFamily="serif">
        Tell your friends what&#39;s good.
      </Heading>
    </Flex>

    <Flex justifyContent="center" mb="10">
      <LightMode>
        <Button colorScheme="green">Get started - it&#39;s free!</Button>
      </LightMode>
    </Flex>

    <Flex justifyContent="center" mb="14">
      <Text color={welcomeColor}>
        The social network for gamers. Soon avaiable on ...
      </Text>
    </Flex>

    <HStack mb="14">
      <Box>Game 1</Box>
      <Box>Game 2</Box>
      <Box>Game 3</Box>
      <Box>Game 4</Box>
      <Box>Game 5</Box>
      <Box>Game 6</Box>
    </HStack>

    <Box mb="14">
      <Text color={textColor}>Leveld let&#39;s you...</Text>
      <Grid gap={4} templateColumns="repeat(3, 1fr)">
        <NextLink href="/welcome/#mark-played">
          <GridItem>
            <Button
              leftIcon={<AiFillEye />}
              textAlign="left"
              whiteSpace="normal"
              height="100%"
            >
              Keep track of every game you&#39;ve ever played (or just start
              from the day you join)
            </Button>
          </GridItem>
        </NextLink>
        <NextLink href="/welcome/#mark-played">
          <GridItem>
            <Button
              leftIcon={<AiFillHeart />}
              textAlign="left"
              whiteSpace="normal"
              height="100%"
            >
              Show some love for your favorite films, lists and reviews with a
              &#34;like&#34;
            </Button>
          </GridItem>
        </NextLink>
        <NextLink href="/welcome/#logging-games">
          <GridItem>
            <Button
              leftIcon={<GrTextAlignLeft />}
              textAlign="left"
              whiteSpace="normal"
              height="100%"
            >
              Write and share reviews, and follow friends and other members to
              read theirs
            </Button>
          </GridItem>
        </NextLink>
        <NextLink href="/welcome/#mark-played">
          <GridItem>
            <Button
              leftIcon={<AiFillStar />}
              textAlign="left"
              whiteSpace="normal"
              height="100%"
            >
              Rate each film on a five-star scale (with halves) to record and
              share your reaction
            </Button>
          </GridItem>
        </NextLink>
        <NextLink href="/pro">
          <GridItem>
            <Button
              leftIcon={<AiFillCalendar />}
              textAlign="left"
              whiteSpace="normal"
              height="100%"
            >
              Keep a diary of your film watching (and upgrade to <b>Pro</b> for
              comprehensive stats)
            </Button>
          </GridItem>
        </NextLink>
        <NextLink href="/welcome/#lists">
          <GridItem>
            <Button
              leftIcon={<AiFillAppstore />}
              textAlign="left"
              whiteSpace="normal"
              height="100%"
            >
              Compile and share lists of games on any topic and keep a watchlist
              of games to see
            </Button>
          </GridItem>
        </NextLink>
      </Grid>
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
)

export default Index
