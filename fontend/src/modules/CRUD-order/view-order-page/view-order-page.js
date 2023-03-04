import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '~/shared/components/paginator/paginator';
import Spinner from '~/shared/components/spinner/spinner';
import { loadAllOrder } from '~/redux/order/order.thunk';
import OrderTable from '../order-table/order-table';

const ORDER_PER_PAGE = 8;

function ViewOrderPage() {
  const { loading, error, order } = useSelector((state) => state.order);
  const [totalPage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [displayOrder, setDisplayOrder] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllOrder());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    if (order) {
      setCurrentPage(1);
      const orderList = [];
      for (let i = 0; i < ORDER_PER_PAGE && i < order?.length; i++) {
        orderList.push(order[i]);
      }
      setDisplayOrder(orderList);
    }
    setTotalPage(order?.length ? Math.ceil(order?.length / ORDER_PER_PAGE) : 1);
  }, [order]);

  useEffect(() => {
    if (order) {
      const tmp = (currentPage - 1) * ORDER_PER_PAGE;
      const orderList = [];
      for (let i = tmp; i < tmp + ORDER_PER_PAGE && i < order?.length; i++) {
        orderList.push(order[i]);
      }
      setDisplayOrder(orderList);
    }
  }, [currentPage]);

  return (
    <>
      <div className="flex space-between">
        <h2 className="text-primary text-xl section-title">Quản lí đơn hàng</h2>
      </div>
      <div>
        {error && <h3>Error</h3>}
        {loading ? (
          <Spinner />
        ) : (
          <>
            <OrderTable orders={displayOrder} />
            <Paginator
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numberPage={totalPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default ViewOrderPage;
