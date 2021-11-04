import React from 'react'
import { Container, Button, Stack } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { onBuy } from '../utils/utils'
import Product from '../component/Product'

export default function Home () {
  const dispatch = useDispatch()
  const productListComponent = []
  const products = useSelector((state) => state.products.products)
  products.forEach((product) => {
    productListComponent.push(
      <Product product={product} />
    )
  })
  return (
    <Container>
        <Button onClick={() => onBuy(products, dispatch)}>Buy Products</Button>
        <Stack spacing={2}>
            {productListComponent}
        </Stack>
    </Container>
  )
}
