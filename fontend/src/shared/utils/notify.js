import { toast } from 'react-toastify';

const position = 'bottom-right';

export const SuccessNotify = (text, duration = 3000) => {
  toast.success(text, {
    position: position,
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const InfoNotify = (text, duration = 3000) => {
  toast.info(text, {
    position: position,
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const WarningNotify = (text, duration = 3000) => {
  toast.warn(text, {
    position: position,
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const ErrorNotify = (text, duration = 3000) => {
  toast.error(text, {
    position: position,
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
