import React, {useRef} from 'react'
import { Flex, Text } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import { useEffect } from 'react'
import nogiDebowe from './../assets/products/nogi-debowe.webp'
import nogiAsymetryczne1 from './../assets/products/nogi-asymetryczne-1.webp'
import nogiAsymetryczne2 from './../assets/products/nogi-asymetryczne-2.webp'
import nogiFeniks from './../assets/products/nogi-feniks.webp'
import nogiPajak from './../assets/products/nogi-pajak.webp'
import nogiPraga from './../assets/products/nogi-praga.webp'
import nogiProste from './../assets/products/nogi-proste.webp'
import nogiTrapez from './../assets/products/nogi-trapez.webp'
import nogiU from './../assets/products/nogi-u.webp'
import nogiW from './../assets/products/nogi-W.webp'
import nogiX from './../assets/products/nogi-x.webp'

const stoly = [
  {
    'title': 'Pająk',
    'desc': '',
    'addedPrice': 150,
    'img': nogiPajak
  },
  {
    'title': 'Asymetryczny I',
    'desc': '',
    'addedPrice': 150,
    'img': nogiAsymetryczne1
  },
  {
    'title': 'Trapez',
    'desc': '',
    'addedPrice': 0,
    'img': nogiTrapez
  },
  {
    'title': 'W',
    'desc': '',
    'addedPrice': 700,
    'img': nogiW
  },
  {
    'title': 'Asymetryczny 2',
    'desc': '',
    'addedPrice': 150,
    'img': nogiAsymetryczne2
  },
  {
    'title': 'Dębowe',
    'desc': '',
    'addedPrice': 0,
    'img': nogiDebowe
  },
  {
    'title': 'Proste I',
    'desc': '',
    'addedPrice': 100,
    'img': nogiProste
  },
  {
    'title': 'X',
    'desc': '',
    'addedPrice': 100,
    'img': nogiX
  },
  {
    'title': 'Feniks',
    'desc': '',
    'addedPrice': 300,
    'img': nogiFeniks
  },
  {
    'title': 'Typ Praga',
    'desc': '',
    'addedPrice': 550,
    'img': nogiPraga
  },
]

const konsole = [
  {
    'title': 'Z szufladami',
    'desc': 'Posiada system cichego domykania!',
    'addedPrice': 0,
    'img': ''
  },
  {
    'title': 'Bez szuflad',
    'desc': '',
    'addedPrice': 0,
    'img': ''
  }
]

const szafki = [
  {
    'title': 'Łazienkowa mała',
    'desc': '',
    'img': ''
  },
  {
    'title': 'Łazienkowa duża',
    'desc': '',
    'img': ''
  },
]

const Offer = () => {
  const productsRef = useRef();

  
  useEffect(() => {
    
    console.log(productsRef.current.offsetWidth)
  }, [])
    
  return (
    <Flex direction='column' bg='#ab6e0c4f' py='5rem' position='relative' id='products'>
    <Text fontWeight='600' fontSize='5xl' align='center' >Nasza Oferta</Text>

    <Flex direction='column' justifyContent='center' alignItems='center'>
    <Text fontWeight='600' fontSize='3xl' align='center' paddingTop='2rem'>Stoły</Text>
    <Text fontWeight='600' fontSize='lg' align='center' paddingTop='1rem' px='20px' maxW='760px'>
    Każdy blat jest wykonany z litego drewna dębowego. Nogi wykonujemy
    z pomalowanej zazwyczaj na czarno stali, jednak dajemy klientom możliwość wyboru koloru jak i kształtu.
    </Text>
    <Flex flexWrap='wrap' alignItems={['start', 'start', 'center']} justifyContent={['start', 'start', 'center']} ref={productsRef}>
      {
      stoly.map((item, idx) => (
        <>
        <ProductCard 
          img={item.img}
          title={item.title}
          desc={item.desc}
          addedPrice={item.addedPrice}
        />
        </>
      ))
      }
    </Flex>  
    
    <Text fontWeight='600' fontSize='3xl' align='center' paddingTop='2rem'>Konsole</Text>
    <Text fontWeight='600' fontSize='lg' align='center' paddingTop='1rem' px='20px' maxW='760px'>
    Każdy blat jest wykonany z litego drewna dębowego. Nogi wykonujemy
    z pomalowanej zazwyczaj na czarno stali, jednak dajemy klientom możliwość wyboru koloru jak i kształtu.
    </Text>
    <Flex flexWrap='wrap' alignItems={['start', 'start']} justifyContent={['start', 'start', 'center']} ref={productsRef}>
      {
      konsole.map((item, idx) => (
        <>
        <ProductCard 
          img={nogiDebowe}
          title={item.title}
          desc={item.desc}
          addedPrice={item.addedPrice}
        />
        </>
      ))
      }
    </Flex>  
</Flex>
</Flex>
  )
}

export default Offer