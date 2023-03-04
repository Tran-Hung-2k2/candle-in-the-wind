import appAPI from '~/shared/utils/appAPI';

class UserService {
  login = (authInfo) => {
    return appAPI().post('/auth/login', authInfo);
  };

  logout = () => {
    return appAPI().post('auth/logout');
  };

  register = (authInfo) => {
    return appAPI().post('auth/register', authInfo);
  };
}

export default new UserService();
