import NextLink from 'next/link'
import NextImage from 'next/image'
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
import PortalImage from '../../public/portal2.jpg'

const Index = () => (
  <>
    <Layout>
      <Box
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        top="0"
        height="675px"
        width="62em"
        opacity="0.5"
      >
        <NextImage src={PortalImage} alt="Portal 2" priority />
      </Box>

      <Box
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        top="0"
        height="675px"
        width="62em"
        backgroundImage="linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.986) 23.63703704%,rgba(20,24,29,.945) 26.1%,rgba(20,24,29,.883) 28.80740741%,rgba(20,24,29,.803) 31.70740741%,rgba(20,24,29,.711) 34.74074074%,rgba(20,24,29,.61) 37.84814815%,rgba(20,24,29,.504) 40.97407407%,rgba(20,24,29,.398) 44.05925926%,rgba(20,24,29,.296) 47.04814815%,rgba(20,24,29,.203) 49.88148148%,rgba(20,24,29,.122) 52.5%,rgba(20,24,29,.059) 54.85185185%,rgba(20,24,29,.016) 56.87777778%,rgba(20,24,29,0) 58.51851852%)"
      />

      <Flex direction="column" alignItems="center" mt="80" mb="10">
        <Heading as="h2" size="xl" fontFamily="serif" mb="3" zIndex="5">
          Track games you&#39;ve played.
        </Heading>
        <Heading as="h2" size="xl" fontFamily="serif" mb="3" zIndex="5">
          Save those you want to play.
        </Heading>
        <Heading as="h2" size="xl" fontFamily="serif" zIndex="5">
          Tell your friends what&#39;s good.
        </Heading>
      </Flex>

      <Flex justifyContent="center" mb="10">
        <LightMode>
          <Button
            colorScheme="green"
            textTransform="uppercase"
            letterSpacing=".075em"
          >
            Get started - it&#39;s free!
          </Button>
        </LightMode>
      </Flex>

      <Flex justifyContent="center" mb="14">
        <Text color={welcomeColor} zIndex="5">
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
                Keep a diary of your film watching (and upgrade to <b>Pro</b>{' '}
                for comprehensive stats)
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
                Compile and share lists of games on any topic and keep a
                watchlist of games to see
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
  </>
)

export default Index
