import React from 'react';
import { connect } from 'react-redux';
import style from './layer.module.scss';

function Layer(props) {
  const { canShow, component } = props;

  return <>{canShow && <div className={`${style.layer}`}>{component}</div>}</>;
}

const mapStateToProps = (state) => {
  return {
    canShow: state.layer.canShow,
    component: state.layer.component,
  };
};

export default connect(mapStateToProps)(Layer);
