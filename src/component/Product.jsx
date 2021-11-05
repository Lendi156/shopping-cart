import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { onAdd, onRemove } from '../utils/utils'

export default function Product ({ product }) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const cartItems = useSelector((state) => state.cartItems.cartItems)

  return (
        <Card>
          <CardContent>
            <Typography>
              {product.title}
            </Typography>
            <Button onClick={() => { onAdd(products, cartItems, product, dispatch) }} variant="contained">Add</Button>
            <Typography>{product.qty}</Typography>
            <Button disabled={product.qty === 0} onClick={() => { onRemove(products, cartItems, product, dispatch) }} variant="contained">Remove</Button>
          </CardContent>
        </Card>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired
  }).isRequired
}
