import React, { useState } from 'react'
import { Text, Box, Stack, Flex} from '@chakra-ui/react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { withTheme } from '@emotion/react'

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
// import { Link as ReachLink } from "reach/router"

const MenuToggle = ({toggle, isOpen}) => {
  return (
    <Box display={{ base: 'block', md: 'none'}} onClick={toggle}>
      {isOpen ? <AiOutlineClose size='25px'/> : <AiOutlineMenu size='25px' />}
    </Box>
  )
}


const MenuItem = ({ name, to}) => {
//   let activeStyle = {
//     textDecoration: "underline",
//     textDecorationThickness: '3px',
//     textDecorationColor: '#00E6CA',
//     transition: " .35s ease-in-out",
//   };

//   let activeClassName = "underline";

  return (
        <Box sx={{
            // 'padding': '1rem',
            '&:hover': {
                color: 'gold',
                cursor: 'pointer'
            }
        }}>
        <Text display='block' fontFamily='sf' fontWeight='600' fontSize='md'>
        <HashLink smooth to={to}>{name}</HashLink>
        </Text>
        </Box>
  )
}

const MenuItems = ({ isOpen }) => {
  return(
    <Box
      display={{ base: isOpen ? 'block': 'none', md: 'block'}}
      flexBasis={{ base: '100%', md: 'auto'}}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
        gap={['1rem', '1rem','2rem']}
      >
        <MenuItem name='Główna' to='#top'/>
        <MenuItem  name='O nas' to='#about'/>
        <MenuItem  name='Produkty' to='#products'/>
        <MenuItem  name='Nasze realizacje' to='#realizations'/>
        <MenuItem name='Kontakt' to='#contact'/>
        
        
      </Stack>
    </Box>
  )
}

const NavbarContainer = ({ children, props }) => {
  return (
    <Flex
    bg='#fef6e6'
    justify='center'
    position='sticky'
    top='0'
    zIndex='99'
    boxShadow='0px 17px 31px -29px rgba(0,0,0,0.62)'
    >
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      py={3}
      width='100%'
      maxW='1400px'
      px={['1.5rem', '1.5rem','3rem']}
    >
      {children}
    </Flex>
    </Flex>
  )
}


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavbarContainer>
      <Box>
        <Text fontFamily='forum' fontSize='3xl' fontWeight='600'>HANDYWOOD</Text>
      </Box>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuItems isOpen={isOpen}/>

    </NavbarContainer>
  )
}

export default Nav