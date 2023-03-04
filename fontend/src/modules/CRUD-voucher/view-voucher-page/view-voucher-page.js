import React from 'react';
import { useNavigate } from 'react-router-dom';

function ViewVoucherPage() {
  const navigate = useNavigate();

  const onCreateVoucher = () => {
    navigate('/admin/voucher/create');
  };
  return (
    <>
      <div className="flex justify-end">
        <button className="create-button" onClick={onCreateVoucher}>
          Tạo mã giảm giá
        </button>
      </div>
      <div>ViewVoucherPage</div>
    </>
  );
}

export default ViewVoucherPage;
