import React, { useEffect } from 'react'
import './App.css'
import { Container, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProductsData } from './utils/utils'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function App () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getProductsData(dispatch)
  }, [])

  return (
    <Container>
      <AppBar sx={{ display: 'flex', alignItems: 'center' }}>
        <Toolbar sx={{ width: '600px' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => navigate('/')}>
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Shopping Cart
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/CheckOut" element={<CheckOut />}/>
      </Routes>
    </Container>
  )
}

export default App
