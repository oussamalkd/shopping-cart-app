import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getProducts = async ({ ...filters }) => {
  try {
    const { data } = await api.get('/products', { params: filters })
    if (data.success) {
      return data.products
    }
  } catch (error) {
    return error
  }
}
