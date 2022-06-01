import React from 'react'
import { Flex, Spacer, Box, Button } from '@chakra-ui/react'
import styles from "./Navbar.module.css"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
        <Flex border="1px solid #eee" h="60px" align="center" p="0px 15px">
                <Box w="60px" fontWeight="bold">Logo</Box>
                <Box w="100px" color="#505050">
                                          <Menu>
                            {({ isOpen }) => (
                              <>
                                <MenuButton isActive={isOpen} >
                                  Inspiration
                                </MenuButton>
                                <MenuList>
                                  <MenuItem>Explore Design Work</MenuItem>
                                  <MenuItem onClick={() => alert('Kagebunshin')}>New & Noteworthy</MenuItem>
                                </MenuList>
                              </>
                            )}
                          </Menu>
                </Box>
                <Box w="100px" color="#505050">
                <Menu>
                            {({ isOpen }) => (
                              <>
                                <MenuButton isActive={isOpen} >
                                  Find Work
                                </MenuButton>
                                <MenuList>
                                  <MenuItem>Job Board</MenuItem>
                                  <MenuItem onClick={() => alert('Kagebunshin')}>Freelance Project</MenuItem>
                                </MenuList>
                              </>
                            )}
                          </Menu>
                </Box>
                <Box w="120px" color="#505050" className={styles.div}>Learn Design</Box>
                <Box w="120px" color="#505050" className={styles.div}>Hire Designers</Box>
            <Spacer/>
                <Button w="120px" variant="link">Sign In</Button>
                <Button bg="pink.400" color="white">Sign Up</Button>
        </Flex>
    </div>
  )
}

export default Navbar