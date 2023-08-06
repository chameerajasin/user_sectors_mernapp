const productionBackendURL = import.meta.env.VITE_BACKEND_URL
const developmentBackendURL = 'http://localhost:4000'

export const baseURL = `${productionBackendURL ?? developmentBackendURL}/api`

console.log(productionBackendURL)
