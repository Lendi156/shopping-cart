import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@mui/material'

export default function Product ({ product }) {
  console.log(product)
  return (
        <Card key={product.id}>
          <CardContent>
            <Typography>
              {product.title}
            </Typography>
          </CardContent>
        </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}
