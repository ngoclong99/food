import axiosClient from './config';

export const get = ({ path, params = {} }) => {
  return axiosClient().get(path, {
    params,
  });
};

export const put = ({ path, body = {} }) => {
  return axiosClient().put(path, body);
};

export const post = ({ path, body = {} }) => {
  return axiosClient().post(path, body);
};

export const del = ({ path, params = {} }) => {
  return axiosClient().delete(path, {
    params,
  });
};
