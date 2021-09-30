import NextLink from 'next/link'
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
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

const Index = () => (
  <Layout>
    <Text>Track games you&#39;ve played.</Text>
    <Text>Save those you want to play.</Text>
    <Text>Tell your friends what&#39;s good.</Text>

    <Button colorScheme="green">Get started - it&#39;s free!</Button>
    <Text>The social network for gamers.</Text>

    <HStack>
      <Box>Game 1</Box>
      <Box>Game 2</Box>
      <Box>Game 3</Box>
      <Box>Game 4</Box>
      <Box>Game 5</Box>
      <Box>Game 6</Box>
    </HStack>

    <Box>
      <Text>Leveld let&#39;s you...</Text>
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

    <Text>Just reviewed...</Text>
    <Text>(stat of total games logged)</Text>
    <Text>(list of latest reviews)</Text>
    <Text>
      Write and share reviews. Compile your own lists. Share your life in games.
    </Text>
    <Text>
      Below are some popular reviews and lists from this week.{' '}
      <Link>
        <b>Sign up</b>
      </Link>{' '}
      to create your own.
    </Text>
    <Text>Popular reviews this week</Text>
    <Text>More</Text>
    <Text>(list of popular reviews)</Text>
    <Text>Popular lists</Text>
    <Text>More</Text>
    <Text>(list of popular lists)</Text>
    <Text>Popular reviewers</Text>
    <Text>More</Text>
    <Text>(list of popular reviewers)</Text>
  </Layout>
)

export default Index
