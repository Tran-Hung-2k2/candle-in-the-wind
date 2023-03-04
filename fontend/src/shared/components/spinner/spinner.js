import React from 'react';
import style from './spinner.module.scss';
import { SyncLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function Spinner({ loading, size, color, absolute }) {
  if (!color) color = '#015394';
  if (!size) size = 8;
  return (
    <>
      <div className={`${style.spinnerContainer} ${absolute ? 'absolute' : ''}`}>
        <SyncLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}

export default Spinner;
