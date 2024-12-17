import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getProducts = async () => {
  try {
    const data = await api.get('/products')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
