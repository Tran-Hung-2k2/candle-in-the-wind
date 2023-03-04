import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '~/shared/components/paginator/paginator';
import Spinner from '~/shared/components/spinner/spinner';
import { loadOrderUser } from '~/redux/order/order.thunk';
import OrderUserList from './order-user-list/order-user-list';

const ORDER_PER_PAGE = 5;

function Order() {
  const { loading, error, order } = useSelector((state) => state.order);
  const [totalPage, setTotalPage] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [displayOrder, setDisplayOrder] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrderUser());
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
    <div>
      {error && <h3>Error</h3>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <OrderUserList orders={displayOrder} />
          <Paginator
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberPage={totalPage}
          />
        </>
      )}
    </div>
  );
}

export default Order;
