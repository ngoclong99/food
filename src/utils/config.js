const API_URL = 'http://localhost:3000/'
const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  AUTH_KEY: 'auth_key',
}

const setStorage = (key, val) => {
  window.localStorage.setItem(key, val)
}

const getStorage = (key) => window.localStorage.getItem(key) || ''

const removeStorage = (key) => {
  window.localStorage.removeItem(key)
}

const getSettingTheme = (type = '', theme = '') => `${type} ${theme}`

export { STORAGE_KEYS, setStorage, getStorage, removeStorage, API_URL, getSettingTheme }
