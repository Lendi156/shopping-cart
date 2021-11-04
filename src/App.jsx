import React from 'react'
import './App.css'
import { Container, Stack } from '@mui/material'
import Product from './component/Product'

function App () {
  return (
    <Container>
      <Stack spacing={2}>
        <Product />
      </Stack>
    </Container>
  )
}

export default App
