import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';

const TOTAL_ITEMS = 60; // Simulate total number of products
const PAGE_SIZE = 12;

const ShopPage = (props) => {
  const allData = generateMockProductData(TOTAL_ITEMS, 'all');

  const [showFilter, setShowFilter] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [visibleItems, setVisibleItems] = useState(allData.slice(0, PAGE_SIZE));

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  const handleLoadMore = () => {
    const newCount = visibleCount + PAGE_SIZE;
    setVisibleCount(newCount);
    setVisibleItems(allData.slice(0, newCount));
  };

  const hasMore = visibleCount < allData.length;

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/', label: 'Catalogue' },
                { label: 'Products' },
              ]}
            />
          </div>
        </Container>

        <Banner
          maxWidth={'650px'}
          name={`Catalog`}
          subtitle={
            'Immerse yourself in our curated collection of exquisite bathroom fittings — from sculpted basins and sleek sinks to sophisticated toilets and refined accessories. Each piece is thoughtfully crafted to bring harmony, luxury, and enduring beauty to your most personal spaces.'
          }
        />

        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>{`${TOTAL_ITEMS} items`}</span>
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div>
          </div>

          <CardController
            closeFilter={() => setShowFilter(true)}
            visible={showFilter}
            filters={Config.filters}
          />

          <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div>

          <div className={styles.productContainer}>
            <span className={styles.mobileItemCount}>{`${TOTAL_ITEMS} items`}</span>
            <ProductCardGrid data={visibleItems} />
          </div>

          {hasMore && (
            <div className={styles.loadMoreContainer}>
              <span>{`${visibleItems.length} of ${TOTAL_ITEMS}`}</span>
              <Button fullWidth level={'secondary'} onClick={handleLoadMore}>
                LOAD MORE
              </Button>
            </div>
          )}
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export default ShopPage;
