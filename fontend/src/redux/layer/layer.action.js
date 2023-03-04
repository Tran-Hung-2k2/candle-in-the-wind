const { SHOW_LAYER, HIDE_LAYER } = require('./layer.type');

const showLayer = (component) => {
  return {
    type: SHOW_LAYER,
    payload: component,
  };
};

const hideLayer = () => {
  return {
    type: HIDE_LAYER,
  };
};

export { showLayer, hideLayer };
