import axiosClient from './config/config'

export const todayApi = {
  getToday() {
    const url = 'today'
    return axiosClient.get(url)
  },
}
