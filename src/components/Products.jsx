import React, { useLayoutEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Text, Box, Flex, Image, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Divider, ButtonGroup} from '@chakra-ui/react'

import { gsap } from 'gsap'

import { Pagination, Navigation } from "swiper";
import stolImg from '../assets/products/img3.webp'
import regalImg from '../assets/products/img1.webp'
import stolikImg from '../assets/products/img2.webp'
import stolik2Img from '../assets/products/img4.webp'




const NewCard = ({img, title, desc}) => {

    const cardRef = useRef();

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

        const hover = gsap.to(cardRef.current, {scale:1.00, duration: .3, ease: 'power1.out'})
        hover.pause()

        cardRef.current.addEventListener('mouseenter', () => hover.play())
        cardRef.current.addEventListener('mouseleave', () => hover.reverse())

        }, cardRef)

        return () => ctx.revert()

    }, [])


    return(
        <Card maxW={['xs', 'xs', 'sm']} h='600px' bg='#fff' fontFamily='sf' boxShadow='-10px -11px 51px -20px rgba(222,165,81,0.75)' transform='scale(0.92)' ref={cardRef}>
            <CardBody>
                <Image
                src={img}
                alt='Stol'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='lg' fontWeight='700'>{title}</Heading>
                <Text fontWeight='400' color='gray.600'>
                    {desc}
                    
                </Text>
                </Stack>
            </CardBody>
            <Divider />
        </Card>
    )
}

const cards = [
        <NewCard 
            img={stolImg}
            title='Stoły'
            desc='Każdy blat jest wykonany z litego drewna dębowego. Nogi wykonujemy
            z pomalowanej zazwyczaj na czarno stali, jednak dajemy klientom możliwość wyboru koloru jak i kształtu.'
            />,
         <NewCard 
            img={regalImg}
            title='Regały'
            desc='Zrobione z litego drewna dębowego oraz proszkowo malowanej stali. 
            Oferujemy różne konfiguracje tego produktu, wedle życzeń klienta.'
            />,
        <NewCard 
            img={stolikImg}
            title='Szafki'
            desc='Wykonane z litego drewna oraz proszkowo malowanej stali. Nasze szafki świetnie uzupełniają wnętrza,
            a dzięki wielu modelom - można dobrać odpowiednią szafkę na przykład pod telewizor.
            '
            />,
         <NewCard 
            img={stolik2Img}
            title='Stoliki kawowe'
            desc='Jak każdy nasz produkt - wykonane z litego drewna oraz stali. Niewielki rozmiar stolika znajdzie zastosowanie
            zarówno w salonie, jak i w sypialni.'
            />
]

const cardsSlide = cards.map(card => (
 <SwiperSlide>{card}</SwiperSlide>
))

const MySwiper = () => {

    return(
        <Box display={['block', 'block', 'none']}>
        <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
            "--swiper-pagination-color": "#000000",
            "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
      >
        {cardsSlide}
      </Swiper>
      </Box>
    )
}

const MyCards = () => {

    return(
        <Flex display={['none', 'none', 'flex']} wrap='wrap' justify='center' align='center' gap='3rem' mt='3rem'>
            {cards}
        </Flex>
    )
}

const Products = () => {
  return (
    <Flex direction='column' bg='#ab6e0c4f' py='5rem' position='relative' id='products'
        // _before={{content: "''", display:'block', position: 'absolute', top:'-3rem', left:'0', width: '150%', p:'3rem', bg:'#fef6e6', borderRadius:'50% 50%'}}
        // _after={{content: "''", display:'block', position: 'absolute', bottom:'-3rem', left:'0', marginX: 'auto', width: '150%', p:'3rem', bg:'#fef6e6', borderRadius:'50% 50%' }}
    >
        <Text fontWeight='600' fontSize='5xl' align='center' >Nasze Produkty</Text>
        <MySwiper />
        <MyCards />
    </Flex>
  )
}

export default Products