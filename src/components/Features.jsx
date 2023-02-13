import React, {useRef, useLayoutEffect} from 'react'
import { Text, Box, Flex, Image, Circle, VStack, } from '@chakra-ui/react'
import {FaHandshake, FaPeopleCarry } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const icons = {
    contact: <FaHandshake color='#967738' size='3rem'/>,
    delivery: <TbTruckDelivery color='#967738' size='3rem'/>,
    help: <FaPeopleCarry color='#967738' size='3rem'/>
}


const Feature = ({ icon, title, desc }) => {
    return (
        <VStack fontFamily='sf' maxW='250px' transform='scale(0.95)'>
            <Circle size='150px' bg='#fef6e6' color='white' boxShadow='15px -15px 40px -28px rgba(0,0,0,0.75);'>
                {icon}
            </Circle>
                <Text fontSize='4xl' fontWeight='600'>{title}</Text>
                <Text fontSize='lg' fontWeight='500' align='center' color='gray.600'>
                    {desc}
                </Text>
        </VStack>
    )
}

const Features = () => {

    const featureRef = useRef()

    useLayoutEffect(() => {

        const features = featureRef.current.children[0].children

        let mm = gsap.matchMedia();

        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo([features], {x: -300, opacity: 0}, {scrollTrigger: { trigger: featureRef.current.children, start: 'top 70%' }, x: 0, opacity: 1, duration: .5, stagger: 0.2})
            

            Object.values(features).forEach((feature) => {

                const hover = gsap.to(feature, {scale:1.00, duration: .5})
                hover.pause()

                feature.addEventListener('mouseenter', () => hover.play())
                feature.addEventListener('mouseleave', () => hover.reverse())
            })

        }, featureRef)

        return () => ctx.revert()

    }, [])



  return (
    <Flex
        bg='#ffffff'
        fontFamily='sf'
        justify='center'
        my='3rem'
    >
    <Flex direction='column' ref={featureRef} >
        <Flex direction={['column', 'column','row']} align='flex-start' justify='center' gap='5rem' mt='1.5rem' >
            <Feature 
                icon={icons.contact}
                title='Zaufanie'
                desc='Posiadamy spore grono klientów, którzy chętnie do nas wracają'
            />
            <Feature 
                icon={icons.delivery}
                title='Dostawa'
                desc='Osobiście dostarczamy wszystkie produkty do naszych klientów'
            />
            <Feature 
                icon={icons.help}
                title='Elastyczność'
                desc='Zawsze dostosowujemy się pod gusta i wymagania każdego klienta'
            />
        </Flex>
    </Flex>
    </Flex>
  )
}

export default Features