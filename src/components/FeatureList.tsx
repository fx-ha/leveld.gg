import { Grid, Text } from '@chakra-ui/react'
import {
  AiFillAppstore,
  AiFillCalendar,
  AiFillEye,
  AiFillHeart,
  AiFillStar,
} from 'react-icons/ai'
import { GrTextAlignLeft } from 'react-icons/gr'
import { FeatureBox } from '.'
import { textColor } from '../constants'

const FeatureList = () => {
  return (
    <>
      <Text color={textColor} mb="2">
        Leveld let&#39;s you...
      </Text>

      <Grid templateColumns="repeat(3, 1fr)" gap="3" mb="3">
        <FeatureBox
          href="/welcome/#mark-played"
          backgroundColor="#00c030"
          text="Keep track of every game you&#39;ve ever played (or just start
                  from the day you join)"
        >
          <AiFillEye size="40" />
        </FeatureBox>

        <FeatureBox
          href="/welcome/#mark-played"
          backgroundColor="#ee7000"
          text="Show some love for your favorite films, lists and reviews with a
            &#34;like&#34;"
        >
          <AiFillHeart size="40" />
        </FeatureBox>

        <FeatureBox
          href="/welcome/#logging-games"
          backgroundColor="#209ce4"
          text="Write and share reviews, and follow friends and other members to
            read theirs"
        >
          <GrTextAlignLeft size="40" />
        </FeatureBox>
      </Grid>

      <Grid templateColumns="repeat(3, 1fr)" gap="3">
        <FeatureBox
          href="/welcome/#mark-played"
          backgroundColor="#00c030"
          text="Rate each film on a five-star scale (with halves) to record and
            share your reaction"
        >
          <AiFillStar size="40" />
        </FeatureBox>

        <FeatureBox
          href="/pro"
          backgroundColor="#ee7000"
          text="Keep a diary of your film watching (and upgrade to Pro for
              comprehensive stats)"
        >
          <AiFillCalendar size="40" />
        </FeatureBox>

        <FeatureBox
          href="/welcome/#lists"
          backgroundColor="#209ce4"
          text="Compile and share lists of games on any topic and keep a
            watchlist of games to see"
        >
          <AiFillAppstore size="40" />
        </FeatureBox>
      </Grid>
    </>
  )
}

export default FeatureList
