import axiosClient from './config/config'

export const aboutApi = {
  getAbout() {
    const url = 'about-us'
    return axiosClient.get(url)
  },
}
