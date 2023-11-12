import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { basePrice } from '../data'

const TableRow = ({dimensions, extraBeds, price}) => {
    return (
        <Tr>
            <Td paddingLeft='0'>{dimensions}</Td>
            <Td textAlign='center'>{extraBeds}</Td>
            <Td isNumeric paddingRight='0'>{price} zł</Td>
        </Tr>
    )
}
const FurnitureRow = ({dimensions, price}) => {
    return (
        <Tr>
            <Td paddingLeft='0'>{dimensions}</Td>
            <Td isNumeric paddingRight='0'>{price} zł</Td>
        </Tr>
    )
}

const PricesTable = ({addedPrice, priceOffer}) => {

    const offerForTable = basePrice?.map((oneRow) => (
        <TableRow
            dimensions={oneRow[0]}
            extraBeds={oneRow[1]}
            price={parseInt(oneRow[2]) + parseInt(addedPrice)}
        />
    ))

    const offerForFurtniture =  priceOffer?.map((oneRow) => (
        <FurnitureRow
            dimensions={oneRow[0]}
            price={parseInt(oneRow[1])}
        />
    ))
  
  return (
    <>
    <TableContainer maxH={['55vh', '65vh', '50vh']} px='20px' overflowY='scroll'>
        <Table variant='simple'>
            <Thead>
            <Tr>
                {priceOffer ? (
                    <>
                        <Th paddingLeft='0'>Wymiary</Th>
                        <Th paddingRight='0' isNumeric>Cena</Th>    
                    </>
                ): (
                    <>
                        <Th paddingLeft='0'>Wymiary</Th>
                        <Th textAlign='center'>Dostawki</Th>
                        <Th paddingRight='0' isNumeric>Cena</Th>
                    </>
                )}
            </Tr>
            </Thead>
            <Tbody>
                {priceOffer ? offerForFurtniture : offerForTable}
            </Tbody>
            <Tfoot>
            </Tfoot>
        </Table>
    </TableContainer>
    </>
  )
}

export default PricesTable