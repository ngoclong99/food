import axiosClient from './config/config';

export const menuApi = {
  getMenu() {
    const url = `links`;
    return axiosClient.get(url);
  },
};
