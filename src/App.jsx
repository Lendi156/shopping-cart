import React, { useEffect } from 'react'
import './App.css'
import { Container, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getProductsData } from './utils/utils'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    getProductsData(dispatch)
  }, [])

  return (
    <Container>
      <Grid container>
        <Grid item>
          <Home />
        </Grid>
        <Grid item>
          <CheckOut />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
