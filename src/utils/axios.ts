import axios, { Method } from 'axios';

export interface AxiosRequestInterface {
  method: Method;
  path: string;
  data?: any;
  headers?: any;
}

const axiosRequest = (props: AxiosRequestInterface) => {
  const { method, data, headers, path } = props;
  return axios({
    data,
    method,
    headers,
    url: path,
  })
    .then((response: any) => response?.data)
    .catch((error: any) => error);
};

export default axiosRequest;
