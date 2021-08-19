import axiosRequest from 'utils/axios';

class BaseService {
  request: any;

  constructor() {
    this.request = axiosRequest;
  }

  async getRequest(path: string) {
    return this.request({ method: 'get', path });
  }

  async postRequest(path: string, body: any) {
    return this.request({ method: 'post', path, data: body });
  }

  async putRequest(path: string, body: any) {
    return this.request({ method: 'put', path, data: body });
  }

  async deleteRequest(path: string) {
    return this.request({ method: 'delete', path });
  }
}

export default BaseService;
