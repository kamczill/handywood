import React, {useRef} from 'react'
import { Flex, Text } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import { stoly, szafki, konsole } from './../data'

const Offer = () => {
  const productsRef = useRef();

  return (
    <Flex direction='column' bg='#ab6e0c4f' py='5rem' position='relative' id='products'>
    <Text fontWeight='600' fontSize='5xl' align='center' >Nasza Oferta</Text>

    <Flex direction='column' justifyContent='center' alignItems='center'>
    <Text fontWeight='600' fontSize='3xl' align='center' paddingTop='2rem'>Stoły</Text>
    <Text fontWeight='600' fontSize='lg' align='center' paddingTop='1rem' px='20px' maxW='1200px'>
    Każdy blat jest wykonany z litego drewna dębowego. Nogi wykonujemy
    z pomalowanej zazwyczaj na czarno stali, jednak dajemy klientom możliwość wyboru koloru jak i kształtu.
    </Text>
    <Flex flexWrap='wrap' alignItems={['start', 'start', 'center']} justifyContent={['start', 'start', 'center']} ref={productsRef}>
      {
      stoly.map((item, idx) => (
        <>
        <ProductCard 
          key={item.title}
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
    <Text fontWeight='600' fontSize='lg' align='center' paddingTop='1rem' px='20px' maxW='1200px'>
    Każdy blat naszych konsoli jest wykonany z litego drewna dębowego, co gwarantuje ich trwałość i elegancki wygląd. 
    Podstawa, wykonana z pomalowanej zazwyczaj na czarno stali, zapewnia solidne wsparcie, 
    a jednocześnie dodaje nowoczesnego charakteru. Dajemy naszym klientom możliwość wyboru nie tylko koloru, 
    ale również kształtu podstawy, aby idealnie pasowała do ich indywidualnych potrzeb i preferencji.
    </Text>
    <Flex flexWrap='wrap' alignItems={['start', 'start']} justifyContent={['start', 'start', 'center']} ref={productsRef}>
      {
      konsole.map((item, idx) => (
        <>
        <ProductCard
          key={item.title}
          img={item.img}
          title={item.title}
          desc={item.desc}
          priceOffer={item.priceOffer}
          additionalText={item.additionalText}
        />
        </>
      ))
      }
    </Flex>  
    <Text fontWeight='600' fontSize='3xl' align='center' paddingTop='2rem'>Szafki</Text>
    <Text fontWeight='600' fontSize='lg' align='center' paddingTop='1rem' px='20px' maxW='1200px'>
    Każda nasza szafka jest wykonana z litego drewna dębowego, co zapewnia jej wytrzymałość i unikatowy wygląd. 
    Ramy i drzwi szafek są starannie wykończone, z możliwością wyboru koloru według preferencji klienta. 
    Stalowe elementy, zazwyczaj malowane na czarno, dodają nowoczesnego charakteru, 
    jednak oferujemy naszym klientom swobodę wyboru kolorystyki i stylu tych metalowych akcentów, 
    aby idealnie komponowały się z ich przestrzenią i gustem.
    </Text>
    <Flex flexWrap='wrap' alignItems={['start', 'start']} justifyContent={['center']} ref={productsRef}>
      {
      szafki.map((item, idx) => (
        <>
        <ProductCard
          key={item.title}
          img={item.img}
          title={item.title}
          desc={item.desc}
          priceOffer={item.priceOffer}
          additionalText={item.additionalText}
        />
        </>
      ))
      }
    </Flex>
    <Text fontWeight='600' fontSize='lg' align='center' paddingTop='1rem' px='20px' maxW='1200px'>
    Odwiedźcie nasz Instagram, by zobaczyć nasze loftowe realizacje. Jeśli szukacie czegoś unikatowego, co nie jest w naszej ofercie, skontaktujcie się z nami. Chętnie podejmiemy współpracę, by stworzyć meble idealne dla Waszego wnętrza!
    </Text>
</Flex>
</Flex>
  )
}

export default Offer