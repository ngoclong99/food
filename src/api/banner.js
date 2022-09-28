import axiosClient from './config/config';

export const bannerApi = {
  getBanner() {
    const url = 'banner';
    return axiosClient.get(url);
  },
};
