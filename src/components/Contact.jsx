import React, {useLayoutEffect, useRef} from 'react'
import { Box, Flex, Text, Image, Link } from '@chakra-ui/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { TfiFacebook } from 'react-icons/tfi'
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'

const Feature = ({icon, title, bgColor, fontColor, href}) => {

    return(
        <Link href={href}>
        <Flex direction='column' align='center' justify='center' p='1.5rem' borderRadius='50%' bg={bgColor} boxShadow='3px 5px 23px -12px rgba(66, 68, 90, 1)' transform='scale(0.97)'
            _hover={{transform: 'scale(1.00)'}}
        >
            
            {icon}
            
        </Flex>
        </Link>
    )
}

const Contact = () => {

    const contactRef = useRef();

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger)
            
            const contactChildren = contactRef.current.children[0].children

            gsap.fromTo(contactChildren, {y: '+=50px', opacity: 0}, { scrollTrigger: { trigger: contactRef.current, start: 'top 50%'}, y: '0', opacity: 1, duration: .8, stagger: 0.1})


        }, contactRef)

    }, [])


  return (
    <Flex bg='#fff' w='100%' align='center' justify='center' fontFamily='sf' mt='3rem' id='contact' ref={contactRef}>
        <Flex direction='column' color='#000000' justify='center' align='center'>
            <Text fontSize='5xl' align='center'>Kontakt</Text>

            <Flex direction='column' align='center' justify='center' mt='3rem' px={['1rem','7rem','10rem']} py='2rem' bg='#fef6e6' boxShadow='3px 5px 23px -12px rgba(66, 68, 90, 1)' transform='scale(0.97)'
            _hover={{transform: 'scale(1.00)'}}
            >
                <BsFillTelephoneForwardFill size='2rem'/>
                <Text fontSize={['lg','xl']} fontWeight='700' mt='2rem'><Link href='tel:577035354'>(+48) 577 035 354</Link></Text>
                <Text fontSize={['lg','xl']} fontWeight='700' mt='1rem'><Link href='mailto:handywood.contact@gmail.com'>handywood.contact@gmail.com</Link></Text>
            </Flex>

            <Text fontSize='xl' color="gray.600" align='center' mt='2rem' px='3rem'>Znajdź nas na social mediach i skontaktuj się z nami!<br/>
                Otrzymasz również cennik oraz możliwość indywidualnego projektu
            </Text>
            
            <Flex direction={['column', 'column', 'row']} align='center' mt='4rem' mb='3rem' gap='2rem'>
                <Feature 
                    icon={<TfiFacebook color='white' size='4rem' />}
                    bgColor='#1778f2'
                    href={'https://www.facebook.com/profile.php?id=100068815206240'}
                />
                <Feature 
                    icon={<RiInstagramFill color='white' size='4rem' />}
                    bgColor='linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);'
                    href={'https://www.instagram.com/handywood_/'}
                />
                <Feature 
                    icon={<RiWhatsappFill color='white' size='4rem' />}
                    bgColor='#25d366'
                    href={'https://wa.me/48577035354'}
                />
            </Flex>
            
            
            
        </Flex>
    </Flex>
  )
}

export default Contact