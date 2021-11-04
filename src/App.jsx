import React, { useEffect } from 'react'
import './App.css'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
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
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/CheckOut" element={<CheckOut />}/>
      </Routes>
    </Container>
  )
}

export default App
