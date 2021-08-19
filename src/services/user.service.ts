import BaseService from 'services/base.service';

export interface UserServiceInterface {
  login: Function;
  register: Function;
}

class UserService extends BaseService {
  login(email: string, password: string) {
    const me = this;
    console.log(email, password);
  }

  register(email: string, password: string) {
    const me = this;
    console.log(email, password);
  }
}

export default UserService;
