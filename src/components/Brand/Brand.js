import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      
      <svg
  width="200"
  height="50"
  viewBox="0 0 300 60"
  xmlns="http://www.w3.org/2000/svg"
>
  <text
    x="20"
    y="35"
    font-family="Times New Roman, serif"
    font-size="32"
    fill="black"
  >
    Kitchen & Bathrooms
  </text>
</svg>

    </div>
  );
};

export default Brand;
