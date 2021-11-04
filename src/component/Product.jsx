import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { onAdd } from '../utils/utils'

export default function Product ({ product, onRemove }) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  return (
        <Card key={product.id}>
          <CardContent>
            <Typography>
              {product.title}
            </Typography>
            <Button onClick={() => onAdd(products, cartItems, product, dispatch)}>Add</Button>
            <Typography>{product.qty}</Typography>
            <Button onClick={() => onRemove(product)}>Remove</Button>
          </CardContent>
        </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}
