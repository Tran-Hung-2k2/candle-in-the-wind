const requiredField = () => {
  return 'Trường này là bắt buộc';
};

const minLengthField = (value) => {
  return {
    value,
    message: `Tối thiểu ${value} kí tự`,
  };
};
const maxLengthField = (value) => {
  return {
    value,
    message: `Tối đa ${value} kí tự`,
  };
};

const emailField = () => {
  return { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Email không hợp lệ' };
};

const phoneNumber = () => {
  return {
    value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    message: 'Số điện thoại không hợp lệ',
  };
};

const positiveNumber = () => {
  return {
    value: /^\+?(0|[1-9]\d*)$/,
    message: 'Giá trị phải là số nguyên dương',
  };
};

export { requiredField, minLengthField, maxLengthField, emailField, phoneNumber, positiveNumber };
