import React from 'react';

import { BounceLoader } from 'react-spinners';

import styles from './Spinner.module.scss';

function Spinner(props) {

  const { containerClass } = props;

  let spinnerContainerClass = styles.spinnerMain;

  if (typeof containerClass !== 'undefined') {
    spinnerContainerClass += containerClass;
  }

  const spinnerProperties = {
    color: '#746CFE',
    loading: true,
    size: 100
  };

  return (
    <div className={spinnerContainerClass}>
      <BounceLoader {...spinnerProperties} />
    </div>
  );
}

export default Spinner;