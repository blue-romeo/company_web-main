import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.jpg'}
        title={'Sinks'}
        text={'VIEW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection2.jpg'}
        title={'Tiles'}
        text={'VIEW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection3.jpg'}
        title={'Accessories'}
        text={'VIEW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.jpg'}
        title={'Toilet Bowls'}
        text={'VIEW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
