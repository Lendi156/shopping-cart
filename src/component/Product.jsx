import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Button } from '@mui/material'

export default function Product ({ product, onAdd }) {
  return (
        <Card key={product.id}>
          <CardContent>
            <Typography>
              {product.title}
            </Typography>
            <Button onClick={() => onAdd(product)}>Add</Button>
          </CardContent>
        </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired
}
