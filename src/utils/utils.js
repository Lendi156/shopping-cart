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

export const onAdd = async (products, cartItems, product, dispatch) => {
  const productInCartItemsexist = cartItems.find((cartItem) => cartItem.id === product.id)
  const productexist = products.find((productTarget) => productTarget.id === product.id)
  if (productexist) {
    await dispatch(setProducts(
      products.map((productTarget) =>
        productTarget.id === product.id ? { ...productexist, qty: productexist.qty + 1 } : productTarget
      )
    ))
  }
  if (productInCartItemsexist) {
    await dispatch(setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...productInCartItemsexist, qty: productInCartItemsexist.qty + 1 } : cartItem
      )
    ))
  } else {
    await dispatch(setCartItems(
      [...cartItems, { ...product, qty: 1 }]
    ))
  }
}

export const onRemove = async (products, cartItems, product, dispatch) => {
  const productInCartItemsexist = cartItems.find((cartItem) => cartItem.id === product.id)
  const productexist = products.find((productTarget) => productTarget.id === product.id)
  if (cartItems.length > 0) {
    if (productexist.qty === 1) {
      await dispatch(setProducts(
        products.map((productTarget) =>
          productTarget.id === product.id ? { ...productexist, qty: 0 } : productTarget
        )
      ))
    } else {
      await dispatch(setProducts(
        products.map((productTarget) =>
          productTarget.id === product.id ? { ...productexist, qty: productexist.qty - 1 } : productTarget
        )
      ))
    }
    if (productInCartItemsexist.qty === 1) {
      await dispatch(setCartItems(
        cartItems.filter((cartItem) => cartItem.id !== product.id)
      ))
    } else {
      await dispatch(setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id ? { ...productInCartItemsexist, qty: productInCartItemsexist.qty - 1 } : cartItem
        )
      ))
    }
  }
}

export const onBuy = (products, dispatch, navigate) => {
  dispatch(setProducts(
    products.map((product) => ({ ...product, qty: 0 }))
  ))
  dispatch(setCartItems([]))
  navigate('/')
}

export const nextPage = (first, last, setFirst, setLast) => {
  setFirst(first + 10)
  setLast(last + 10)
}
