import React from 'react';
import MainLayout from '~/layout/main-layout/main-layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from '~/modules/auth/components/require-auth/require-auth';
import Forum from '~/modules/forum/forum';
import Home from '~/modules/Home/home';
import Products from '~/modules/Products/products';
import Login from '~/modules/auth/components/login/login';
import Register from '~/modules/auth/components/register/register';
import NotFound from '~/modules/not-found/not-found';
import ProductDetail from '~/modules/product-detail/product-detail';
import CartPage from '~/modules/cart-page/cart-page';
import Checkout from '~/modules/checkout/checkout';
import Profile from '~/modules/profile/profile';
import ResetPassword from '~/modules/auth/components/reset-password/reset-password';
import ProductSearchResult from '~/modules/Products/product-search-result/product-search-result';
import RequireAdmin from '~/modules/auth/components/require-admin/require-admin';
import RequireNotAdmin from '~/modules/auth/components/require-not-admin/require-not-admin';
import ViewProductPage from '~/modules/CRUD-product/view-product-page/view-product-page';
import CreateProductPage from '~/modules/CRUD-product/create-product-page/create-product';
import ViewVoucherPage from '~/modules/CRUD-voucher/view-voucher-page/view-voucher-page';
import CreateVoucherPage from '~/modules/CRUD-voucher/create-voucher-page/create-voucher-page';
import ViewOrderPage from '~/modules/CRUD-order/view-order-page/view-order-page';
import CreateOrderPage from '~/modules/CRUD-order/create-order-page/create-order-page';
import CreatePostPage from '~/modules/CRUD-post/create-post-page/create-post-page';
import ViewPostPage from '~/modules/CRUD-post/view-post-page/view-post-page';
import EditProductPage from '~/modules/CRUD-product/edit-product-page/edit-product-page';
import Order from '~/modules/order/order';

function Router() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        {/* Public Routes*/}

        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        <Route element={<RequireNotAdmin />}>
          <Route path="" element={<Navigate to="home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products/category/:categoryId" element={<Products />}></Route>
          <Route path="/products/:productId" element={<ProductDetail />}></Route>
          <Route path="/products/search/:keyword" element={<ProductSearchResult />}></Route>
          <Route path="/register" element={<Register />}></Route>

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/forum" element={<Forum />}></Route>
            <Route path="/cart-purchase" element={<Checkout />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
            <Route path="/order-history" element={<Order />}></Route>
          </Route>
        </Route>
      </Route>

      {/* Private routes */}
      <Route element={<RequireAdmin />}>
        <Route path="/admin" element={<Navigate to="/admin/product" />}></Route>
        <Route path="/admin/product" element={<ViewProductPage />}></Route>
        <Route path="/admin/product/create" element={<CreateProductPage />}></Route>
        <Route path="/admin/product/edit/:productId" element={<EditProductPage />}></Route>
        <Route path="/admin/voucher" element={<ViewVoucherPage />}></Route>
        <Route path="/admin/voucher/create" element={<CreateVoucherPage />}></Route>
        <Route path="/admin/order" element={<ViewOrderPage />}></Route>
        <Route path="/admin/order/create" element={<CreateOrderPage />}></Route>
        <Route path="/admin/post" element={<ViewPostPage />}></Route>
        <Route path="/admin/post/create" element={<CreatePostPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
