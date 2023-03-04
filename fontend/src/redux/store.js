import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cart/cart.reducer';
import checkoutReducer from './checkout/checkout.reducer';
import layerReducer from './layer/layer.reducer';
import orderReducer from './order/order.reducer';
import postsReducer from './post/post.reducer';
import productReducer from './product/product.reducer';
import userProfileReducer from './user-profile/user-profile.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  layer: layerReducer,
  userProfile: userProfileReducer,
  post: postsReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  order: orderReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
