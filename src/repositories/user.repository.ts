import { UserService } from 'services';
import { UserServiceInterface } from 'services/user.service';

class UserRepository {
  userService: UserServiceInterface;

  constructor() {
    this.userService = new UserService();
  }
}

export default UserRepository;
