import React from 'react'
import { 
  ModalOverlay, ModalHeader, useDisclosure, Button, Modal, ModalContent, ModalCloseButton, ModalBody, Text, ModalFooter, Tooltip
} from '@chakra-ui/react'
import PricesTable from './PricesTable'


function ModalBtn({title, addedPrice, priceOffer, additionalText }) {
    const OverlayOne = () => (
      <ModalOverlay
        backdropFilter='blur(4px) '
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )

    const AdditionalText = () => (
      additionalText?.map(row => (
        <Text>- {row}</Text>
      ))
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Cennik i konfiguracje
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose} maxW='100%' >
          {overlay}
          <ModalContent mx='8px' >
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <PricesTable addedPrice={addedPrice} priceOffer={priceOffer} />
            </ModalBody>
            <Text px='24px' pt='8px'>
              { additionalText ? 
                <AdditionalText /> :
                'W razie niestandardowych zamówień prosimy o bezpośredni kontakt'
              }
            </Text>
            <ModalFooter>
              <Button onClick={onClose}>Zamknij</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalBtn