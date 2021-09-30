import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components'

const Games = () => (
  <Layout>
    <Flex>
      <HStack>
        <Text>Browse by</Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Year
          </MenuButton>
          <MenuList>
            <MenuItem>All</MenuItem>
            <MenuItem>2020s</MenuItem>
            <MenuItem>2010s</MenuItem>
            <MenuItem>2000s</MenuItem>
            <MenuItem>1990s</MenuItem>
            <MenuItem>1980s</MenuItem>
            <MenuItem>1970s</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Rating
          </MenuButton>
          <MenuList>
            <MenuItem>Highest First</MenuItem>
            <MenuItem>Lowest First</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Popular
          </MenuButton>
          <MenuList>
            <MenuItem>All Time</MenuItem>
            <MenuItem>This Year</MenuItem>
            <MenuItem>This Month</MenuItem>
            <MenuItem>This Week</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Genre
          </MenuButton>
          <MenuList>
            <MenuItem>Action</MenuItem>
            <MenuItem>Adventure</MenuItem>
            <MenuItem>...</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Platform
          </MenuButton>
          <MenuList>
            <MenuItem>PC</MenuItem>
            <MenuItem>PlayStation</MenuItem>
            <MenuItem>Xbox</MenuItem>
            <MenuItem>Nintendo</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Other
          </MenuButton>
          <MenuList>
            <MenuItem>Most Anticipated</MenuItem>
            <MenuItem>Coming Soon</MenuItem>
          </MenuList>
        </Menu>
        <Text>Find a game</Text>
        <Input maxW={150} />
      </HStack>
    </Flex>
  </Layout>
)

export default Games
