const { SHOW_LAYER, HIDE_LAYER } = require('./layer.type');

const initialState = {
  canShow: false,
  component: null,
};

const layerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LAYER:
      return {
        ...state,
        canShow: true,
        component: action.payload,
      };
    case HIDE_LAYER:
      return {
        ...state,
        canShow: false,
        component: null,
      };
    default:
      return state;
  }
};

export default layerReducer;
