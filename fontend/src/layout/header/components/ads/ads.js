import React from 'react';

function Ads() {
  const adsText = 'Đăng ký trở thành khách hàng thân thiết để nhận nhiều ưu đãi';
  return (
    <section className="bg-light-primary py-2">
      <div className="grid wide text-center text-primary text-sm font-semibold">
        <p>{adsText}</p>
      </div>
    </section>
  );
}

export default Ads;
