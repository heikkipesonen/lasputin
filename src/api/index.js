import axios from 'axios'

export const CONFIG = {
  // global base url for api
  // used in all requests
  baseURL: '',

  // global headers for all requests
  // NOTE:
  // first api call sent only after headers are resolved
  // ie. you are using external authorization
  // like aws cognito or something
  headers: {},
  waitForHeaders: true
}


// instantiate new api and use base URL
export const api = axios.create({
  baseURL: CONFIG.baseURL
})

let resolveHeaders
const ensureHeaders = new Promise((resolve) => {
  resolveHeaders = resolve
})

export const setHeaders = (headers) => {
  requestHeaders = {
    ...config.headers
  }

  resolveHeaders()
}

api.interceptors.request.use((config) => {
  if (config.waitForHeaders) {
    return ensureHeaders().then(() => {
      config.headers = {
        ...config.headers,
        ...requestHeaders
      }

      return config
    })
  } else {
    config.headers = {
      ...config.headers,
      ...requestHeaders
    }

    return config
  }
})

export default api
