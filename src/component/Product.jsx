import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, IconButton, CardActions } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { onAdd, onRemove } from '../utils/utils'

export default function Product ({ product }) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const cartItems = useSelector((state) => state.cartItems.cartItems)

  return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CardContent>
            <Typography>
              {product.title}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => { onAdd(products, cartItems, product, dispatch) }}>
                <AddIcon />
              </IconButton>
              <Typography>{product.qty}</Typography>
              <IconButton disabled={product.qty === 0} onClick={() => { onRemove(products, cartItems, product, dispatch) }}>
                <RemoveIcon />
            </IconButton>
          </CardActions>
        </Card>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired
  }).isRequired
}
