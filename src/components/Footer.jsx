import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import logo from '../assets/logo2.png'

const Footer = () => {
    return (
        <Flex direction={['column', 'column', 'row']} gap='2rem' bg='#3a4353' w='100%' align='center' justify='space-between' fontFamily='sf' color='#fff' py='1rem' px='3rem'>
            <Image src={logo} w='150px' />
            <Flex direction={['column', 'column', 'row']} gap={[0, 0, '1rem']}>
            <Text>Copyright © HANDYWOOD 2022. Wszelkie prawa zastrzeżone</Text>
            <Text>Design by Kemz</Text>
            </Flex>
        </Flex>
      )
}

export default Footer