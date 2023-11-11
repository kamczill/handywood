import React from 'react'
import { 
  ModalOverlay, ModalHeader, useDisclosure, Button, Modal, ModalContent, ModalCloseButton, ModalBody, Text, ModalFooter, Tooltip
} from '@chakra-ui/react'
import PricesTable from './PricesTable'


function ModalBtn({title, addedPrice }) {
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
              <PricesTable addedPrice={addedPrice} />
            </ModalBody>
            <Text px='24px' pt='8px'>
              W razie niestandardowych zamówień prosimy o bezpośredni kontakt
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