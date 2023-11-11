import React, { useRef, useLayoutEffect} from 'react'

import { Flex, Box, Image, Text } from '@chakra-ui/react'

import homeIcon from '../assets/homeIcon.png'
import bathImg from '../assets/bath.jpg'
import uniqueIcon from '../assets/uniqueIcon.png'
import { transform } from 'framer-motion'
import { gsap } from 'gsap'



const About = () => {

    const imagesRef = useRef();
    const textRef = useRef();

    useLayoutEffect(() => {

        const images = imagesRef.current.children

        const ctx = gsap.context(() => {
            gsap.fromTo([images[1], images[2]], {y:50, opacity: 0}, {scrollTrigger:{trigger: textRef.current.children, start: 'top 80%'}, y:0, opacity: 1, duration: 1.8})
            gsap.fromTo(images[1], {x:0, y:30}, {x: 0, y:0, repeat: -1, yoyo: true, duration: 1, ease: "circ.Out"})
            gsap.fromTo(images[2], {x:0, y:10}, {x:0, y: -5, repeat: -1, yoyo: true, duration: 1, delay: .3, ease: "circ.Out"})
        }, imagesRef)

        const ctx2 = gsap.context(() => {
            gsap.fromTo(textRef.current.children[0].children[0], {y:50, opacity: 0}, {scrollTrigger:{trigger: textRef.current.children, start: 'top 80%'}, y:0, opacity: 1, duration: 1.8})
        }, )

    }, [])


  return (
    <Flex id='about' bg='#fef6e6' justify='center' px={['1.5rem', '3rem']} ref={textRef}>
        <Flex direction={['column-reverse', 'column-reverse', 'row']} fontFamily='sf' width='100%' maxW='1400px' align='center' justify='space-around' py='3rem' gap='5rem'>
            <Flex direction='column' width='100%' maxW='500px' pb='5rem' >
                <Text fontSize='7xl'>O nas</Text>
                <Text fontSize='lg' color='gray.600'>
                    Handywood to marka stworzona w 2020 roku przez dwójke przyjaciół.
                    Pomysł narodził się z pasji do drewna oraz zapału do tworzenia rzeczy wyjątkowych.
                    Mamy doświadczenie w branży stolarskiej od ponad 8 lat i nieustannie dążymy do rozwoju naszych kompetencji
                </Text>
            </Flex>
            <Flex w='100%' justify='center' >
                <Box
                    position='relative'
                    minWidth={['xs', 'xs', ,'md']}
                    _before={{ content: '""', display: 'inline-block', position:'absolute', bg: '#fef6e6', top: '-2rem', left: '-1rem', width: '110%', p: '2rem', transform: 'rotate(-1.7deg)' }}
                    _after={{ content: '""', display: 'inline-block', position:'absolute', bg: '#fef6e6', bottom: '-2rem', left: '-1rem', width: '110%', p: '2rem', transform: 'rotate(1.7deg)' }}
                    ref={imagesRef}
                    overflow={'hidden'}
                >
                    <Image src={bathImg} w={['xs', 'xs', ,'md']} h={['xl','2xl']} objectFit='cover'/>
                    <Flex direction='column' position='absolute' top={['-1rem','3rem']} left={['-1.2rem','-6rem']} bg='white' p={['1rem','1.5rem']} borderRadius='18px' maxW={['150px', '200px']} boxShadow='-20px -17px 24px -24px rgba(0,0,0,0.75)'>
                        <Image src={homeIcon} w='50px'/>
                        <Text fontWeight='700' fontSize={['lg','xl']} pt='.5rem'>Wykonanie</Text>
                        <Text color='gray.600' fontSize={['md']}>Gwarantujemy dbałość o wszelkie detale</Text>
                    </Flex>
                    <Flex direction='row' gap='1rem' position='absolute' align='center' justify='center' bottom='-.5rem' right='3rem' bg='white' p={['.7rem','1rem']} borderRadius='5px' zIndex='1' boxShadow='-20px 20px 30px -24px rgba(0,0,0,0.75)' >
                        <Image src={uniqueIcon} w='50px' />
                        <Text fontWeight='700' fontSize='lg'>Wyjątkowość</Text>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default About