import { TOKEN } from '~/shared/constants/local-storage-key';
import { USER_ROLE } from '~/shared/constants/role';
import { ErrorNotify, SuccessNotify } from '~/shared/utils/notify';
import { clearCart } from '../cart/cart.action';
import { loadCart } from '../cart/cart.thunk';

const { default: userService } = require('@services/user.service');
const {
  fetchUserProfileRequest,
  fetchUserProfileFailure,
  endSession,
  fetchUserProfileSuccess,
} = require('./user.profile.action');

const loginAccount = (authInfo) => {
  return function (dispatch) {
    dispatch(fetchUserProfileRequest());
    userService
      .login(authInfo)
      .then((res) => {
        sessionStorage.setItem(TOKEN, JSON.stringify(authInfo));
        dispatch(fetchUserProfileSuccess(res.data.user));
        SuccessNotify('Đăng nhập thành công');
        if (res.data.user.ID_Role === USER_ROLE) dispatch(loadCart());
      })
      .catch((error) => {
        dispatch(fetchUserProfileFailure(error));
        ErrorNotify('Đăng nhập thất bại');
      });
  };
};

const logout = () => {
  return function (dispatch) {
    userService
      .logout()
      .then(() => {
        dispatch(endSession());
        sessionStorage.removeItem(TOKEN);
        dispatch(clearCart());
        SuccessNotify('Đăng xuất thành công');
      })
      .catch(() => {
        ErrorNotify('Đã xảy ra lỗi');
      });
  };
};

const registerAccount = (authInfo) => {
  return function () {
    userService
      .register(authInfo)
      .then(() => {
        SuccessNotify('Đăng ký thành công');
      })
      .catch(() => {
        ErrorNotify('Đã xảy ra lỗi');
      });
  };
};

export { loginAccount, logout, registerAccount };
