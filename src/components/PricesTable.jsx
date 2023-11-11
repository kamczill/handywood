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

const Row = ({dimensions, extraBeds, price}) => {
    console.log(dimensions)
    return (
        <Tr>
            <Td paddingLeft='0'>{dimensions}</Td>
            <Td textAlign='center'>{extraBeds}</Td>
            <Td isNumeric paddingRight='0'>{price} zł</Td>
        </Tr>
    )
}

const PricesTable = ({addedPrice}) => {

  
  return (
    <>
    <TableContainer maxH={['65vh', '65vh', '50vh']} px='20px' overflowY='scroll'>
        <Table variant='simple'>
            <Thead>
            <Tr>
                <Th paddingLeft='0'>Wymiary</Th>
                <Th textAlign='center'>Dostawki</Th>
                <Th paddingRight='0' isNumeric>Cena</Th>
            </Tr>
            </Thead>
            <Tbody>
                {basePrice.map((oneRow) => (
                    <Row
                        dimensions={oneRow[0]}
                        extraBeds={oneRow[1]}
                        price={parseInt(oneRow[2]) + parseInt(addedPrice)}
                    />
                ))
                }
            </Tbody>
            <Tfoot>
            </Tfoot>
        </Table>
    </TableContainer>
    </>
  )
}

export default PricesTable