import React from 'react';
import style from './footer.module.scss';

function Footer() {
  return (
    <footer className={`${style.footer}`}>
      <div className="grid wide">
        <div className="row no-gutter">
          <div className="col text-start l-4 m-6 c-6">
            <h4>Địa chỉ</h4>
            <p>Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
            {/* <p>Something</p> */}
          </div>
          <div className="col text-start l-4 m-6 c-6">
            <h4>Liên hệ</h4>
            <p>Hotline: (84)112 334 567</p>
            <p>Email: candleofthewind@gmail.com</p>
          </div>
          <div className="col text-start l-4 m-6 c-6">
            <h4>Đơn vị vận chuyển</h4>
            {/* <p>Something</p> */}
            <p>Giao hàng tiết kiệm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
