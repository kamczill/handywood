import React from 'react'
import { Box, Flex, Text, Image, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const MySwiper = ({children}) => {

    return(
        <Box >
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{'--swiper-pagination-color': "#000", 'padding':'0', 'margin': '0' }}
      >
        {children}
      </Swiper>
      </Box>
    )
}

const stolyImg = ['img1.webp', 'img2.webp', 'img3.webp', 'img4.webp', 'img5.webp', 'img6.webp', 'img7.webp'];
const regalyImg = stolyImg.slice(0, 4);
const szafkiImg = stolyImg.slice(0, 6);
const pozostaleImg = stolyImg.slice(0, 5);

const Realizations = () => {
  return (
    <Box bg='#fef6e6' py='3rem' id='realizations'>
        <Text fontWeight='600' fontSize='5xl' align='center'>Realizacje</Text>
        <Tabs variant='soft-rounded' colorScheme='blackAlpha' width='100%' pt='2rem'>
            <Flex direction='column' width='100%' justify='center' align='center'>
            <TabList m='0'>
                <Flex gap='2rem' wrap='wrap' align='center' justify='center'>
                <Tab fontSize='xl' fontWeight='700'>Stoły</Tab>
                <Tab fontSize='xl' fontWeight='700'>Szafki</Tab>
                <Tab fontSize='xl' fontWeight='700'>Regaly</Tab>
                <Tab fontSize='xl' fontWeight='700'>Pozostałe</Tab>
                </Flex>
            </TabList>
            <TabPanels p='0' m='0'>
                <TabPanel m='0' p='0'>
                    <MySwiper>
                        {stolyImg.map(img => (
                            <SwiperSlide><Image alt='Realizacja stołów' src={`/images/stoly/${img}`}  mb='1rem' h={['sm', 'sm', 'xl']} objectFit='cover'/></SwiperSlide>
                        ))}
                    </MySwiper>
                </TabPanel>
                <TabPanel>
                    <MySwiper>
                            {szafkiImg.map(img => (
                                <SwiperSlide><Image alt='Realizacja szafek' src={`/images/szafki/${img}`}   mb='1rem'h={['sm', 'sm', 'xl']} objectFit='cover'/></SwiperSlide>
                            ))}
                        </MySwiper>
                </TabPanel>
                <TabPanel>
                    <MySwiper>
                            {regalyImg.map(img => (
                                <SwiperSlide><Image alt='Realizacja regałów' src={`/images/regaly/${img}`}   mb='1rem' h={['sm', 'sm', 'xl']} objectFit='cover'/></SwiperSlide>
                            ))}
                        </MySwiper>
                </TabPanel>
                <TabPanel>
                    <MySwiper>
                            {pozostaleImg.map(img => (
                                <SwiperSlide><Image alt='Realizacja pozostałych mebli' src={`/images/pozostale/${img}`} mb='1rem' h={['sm', 'sm', 'xl']} objectFit='cover'/></SwiperSlide>
                            ))}
                        </MySwiper>
                </TabPanel>
            </TabPanels>
            </Flex>
        </Tabs>
    </Box>
  )
}

export default Realizations