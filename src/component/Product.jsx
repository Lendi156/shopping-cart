import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Button } from '@mui/material'

export default function Product ({ product, onAdd, onRemove }) {
  return (
        <Card key={product.id}>
          <CardContent>
            <Typography>
              {product.title}
            </Typography>
            <Button onClick={() => onAdd(product)}>Add</Button>
            <Typography>{product.qty}</Typography>
            <Button onClick={() => onRemove(product)}>Remove</Button>
          </CardContent>
        </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}
