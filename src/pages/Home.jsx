import React, { useState } from 'react'
import { Container, Button, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Product from '../component/Product'

export default function Home () {
  const navigate = useNavigate()
  const [first, setFirst] = useState(0)
  const [last, setLast] = useState(10)
  const productListComponent = []
  const products = useSelector((state) => state.products.products)
  const tenProducts = products.slice(first, last)
  tenProducts.forEach((product) => {
    productListComponent.push(
      <Product product={product} key={product.id} />
    )
  })

  const nextPage = () => {
    setFirst(first + 10)
    setLast(last + 10)
  }
  const prevPage = () => {
    if (first !== 0) {
      setFirst(first - 10)
      setLast(last - 10)
    }
  }
  return (
    <Container>
        <Button onClick={() => navigate('/CheckOut')}>CheckOut</Button>
        {first === 0 ? null : <Button onClick={() => prevPage()}>Previous</Button>}
        {last === products.length ? null : <Button onClick={() => nextPage()}>Next</Button>}
        <Stack spacing={2}>
            {productListComponent}
        </Stack>
    </Container>
  )
}
