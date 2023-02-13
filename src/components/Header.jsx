import React, { useLayoutEffect, useRef} from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import image1 from '../assets/image1.jpg'
import logo from '../assets/logo1.png'



const Header = () => {

    const headerRef = useRef();
    const tl = useRef();
    

    useLayoutEffect(() => {
        
        let mm = gsap.matchMedia();

        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo(headerRef.current.children[0], {x: '400px'}, {x: '-=400px', duration: 1.1})

            mm.add('(max-width: 766px)', () => {
                gsap.fromTo(headerRef.current.children[1], {y: '+=400px', opacity: 0}, { scrollTrigger: { trigger: headerRef.current.children[0], start: 'top top'}, y: '0', opacity: 1, duration: .8, stagger: 1})
            })
            
            mm.add('(min-width: 767px)', () => {
                gsap.fromTo(headerRef.current.children[1], {y: '+=400px', opacity: 0}, { y: '0', opacity: 1, duration: .8})
            })
        } , headerRef) 

        return () => ctx.revert()

    }, [])

  return (
    <Flex bg='#fef6e6' justify='center'>
    <Flex direction={['column', 'column', 'row']} justify='center' align={['center', 'center', 'flex-start']} gap='2rem' fontFamily='sf' px={['1.5rem', '1.5rem','3rem']} py='3rem'  width='100%' maxW='1400px' ref={headerRef}>
        <Flex direction='column' maxW='500px' mt={['1rem', '1rem', '5rem']} id='header-text'>
            <Text fontSize={['5xl','6xl', '7xl']} fontWeight='700' lineHeight='4.2rem' >Wykończ swoje wnętrza prawdziwym drewnem</Text>
            <Text fontSize='xl' color='gray.600' maxW='380px' mt='1rem'>Od początku do końca ręcznie wyprodukowane meble, stworzone wedle pomysłów klientów</Text>
        </Flex>
        <Flex  direction='row' justify={['center']} align='center' gap='1rem' position='relative'>
            <Flex display={['none', 'block', 'block']} mb='6rem'>
                <Image src='images/header/1.webp' w={['3xs','2xs']} h={['2xs', 'sm','md']} objectFit='cover' boxShadow='-14px 17px 63px -26px rgba(0,0,0,0.66)' />
            </Flex>
            <Flex display={['none', 'block', 'block']} mt='3rem'>
                <Image src='images/header/2.webp' w={['2xs']} h={['2xs', 'sm','md']} objectFit='cover' boxShadow='-14px 17px 63px -26px rgba(0,0,0,0.66)' />

            </Flex>
            <Flex>
                <Image src='images/header/3.webp' w={['2xs']} h={['md','xl']} objectFit='cover' boxShadow='-14px 17px 63px -26px rgba(0,0,0,0.66)' />
            </Flex>
            <Box position='absolute' bottom={['0', '0', 'none']}  top={['none', 'none', '0']} left='9rem' >
                <Image src={logo} w='200px' h='80px' objectFit='cover' borderRadius='5px' transform='rotate(20deg)'/>
            </Box>
        </Flex>
    </Flex>
    </Flex>
  )
}

export default Header