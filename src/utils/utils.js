import { setProducts } from '../redux/reducers/productListSlice'

export const getProductsData = async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const responseJson = await response.json()
  const data = []
  await responseJson.forEach((product) =>
    data.push({ ...product, qty: 0 })
  )
  dispatch(setProducts(data))
}
