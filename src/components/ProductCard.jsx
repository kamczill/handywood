import React, { useLayoutEffect, useRef} from 'react'
import { Text, Box, Flex, Image, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Divider, ButtonGroup, Modal} from '@chakra-ui/react'

import { gsap } from 'gsap'
import ModalBtn from './ModalBtn'
const ProductCard = ({img, title, desc, addedPrice}) => {

    const cardRef = useRef();



    return(
        <Card maxW={['md']}  bg='#fff' fontFamily='sf' boxShadow='-10px -11px 51px -20px rgba(222,165,81,0.75)' transform='scale(0.92)' ref={cardRef}>
            <CardBody>
                <Image
                src={img}
                alt='Stol'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='lg' fontWeight='700'>{title}</Heading>
                <Text  fontWeight='400' color='gray.600'>
                    {desc}
                </Text>
                </Stack>
                <Box marginTop='12px'>
                    <ModalBtn title={title} addedPrice={addedPrice} />
                </Box>
            </CardBody>
            <Divider />
        </Card>
    )
}

export default ProductCard;