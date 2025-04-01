import React, { useState, useContext } from 'react';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import SizeList from '../../components/SizeList';
import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';
import { navigate } from 'gatsby';

import { generateMockProductData } from '../../helpers/mock';
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const ProductPage = () => {
  // Ensure product data is retrieved correctly
  const products = generateMockProductData(4, 'toilet');  
  const product = products.length > 0 ? products[0] : null;

  // Context for add-to-cart notification
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification?.showNotification || (() => {});

  // State for quantity, wishlist, swatch, and size
  const [qty, setQty] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(product?.colorOptions?.[0] || null);
  const [activeSize, setActiveSize] = useState(product?.sizeOptions?.[0] || null);

  // Handle wishlist toggle
  const toggleWishlist = () => setIsWishlist((prev) => !prev);

  // Ensure product exists before rendering
  if (!product) {
    return (
      <Layout>
        <Container size={'large'} spacing={'min'}>
          <h1>Product not found</h1>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { link: '/shop', label: 'Sinks' },
              { link: '/shop', label: 'Faucets' },
              { label: `${product.name}` },
            ]}
          />

          <div className={styles.content}>
            <div className={styles.gallery}>
              {product.gallery && <Gallery images={product.gallery} />}
            </div>
            
            <div className={styles.details}>
              <h1>{product.name}</h1>
              <span className={styles.vendor}>by {product.vendor}</span>

              <div className={styles.priceContainer}>
                <CurrencyFormatter appendZero amount={product.price} />
              </div>

              {product.colorOptions && product.colorOptions.length > 0 && (
                <SwatchList
                  swatchList={product.colorOptions}
                  activeSwatch={activeSwatch}
                  setActiveSwatch={setActiveSwatch}
                />
              )}

              {product.sizeOptions && product.sizeOptions.length > 0 && (
                <div className={styles.sizeContainer}>
                  <SizeList
                    sizeList={product.sizeOptions}
                    activeSize={activeSize}
                    setActiveSize={setActiveSize}
                  />
                </div>
              )}

              <div className={styles.quantityContainer}>
                <span>Quantity</span>
                <AdjustItem qty={qty} setQty={setQty} />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button onClick={() => showNotification()} fullWidth level={'primary'}>
                    Add to Bag
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role="presentation"
                  onClick={toggleWishlist}
                >
                  <Icon symbol="heart" />
                  <div className={`${styles.heartFillContainer} ${isWishlist ? styles.show : styles.hide}`}>
                    <Icon symbol="heartFill" />
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>{product.description}</p>
                <span>Product code: {product.productCode}</span>
              </div>

              <div className={styles.informationContainer}>
                {['composition & care', 'delivery & returns', 'help'].map((title, index) => (
                  <Accordion key={index} type="plus" customStyle={styles} title={title}>
                    <p className={styles.information}>{product.description || 'No details available.'}</p>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid spacing showSlider height={400} columns={4} data={products} />
          </div>
        </Container>

        <div className={styles.attributeContainer}>
          <Split
            image="/cloth.png"
            alt="attribute description"
            title="Sustainability"
            description="We design our products to look good and to be used on a daily basis. And our aim is to inspire people to live with few timeless objects made to last. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections."
            ctaText="Learn More"
            cta={() => navigate('/blog')}
            bgColor="var(--standard-light-grey)"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
