import { setProducts } from '../redux/reducers/productListSlice'
import { setCartItems } from '../redux/reducers/cartItemListSlice'

export const getProductsData = async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const responseJson = await response.json()
  const data = []
  await responseJson.forEach((product) =>
    data.push({ ...product, qty: 0 })
  )
  dispatch(setProducts(data))
}

export const onAdd = (products, cartItems, product, dispatch) => {
  const productInCartItemsexist = cartItems.find((cartItem) => cartItem.id === product.id)
  const productexist = products.find((productTarget) => productTarget.id === product.id)
  if (productexist) {
    dispatch(setProducts(
      products.map((productTarget) =>
        productTarget.id === product.id ? { ...productexist, qty: productexist.qty + 1 } : productTarget
      )
    ))
  }
  if (productInCartItemsexist) {
    dispatch(setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...productInCartItemsexist, qty: productInCartItemsexist.qty + 1 } : cartItem
      )
    ))
  } else {
    dispatch(setCartItems(
      [...cartItems, { ...product, qty: 1 }]
    ))
  }
}
