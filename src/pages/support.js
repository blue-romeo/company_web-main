import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import * as styles from './support.module.css';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Policy from '../components/Policy'; // You’ll update this component to handle section-specific content
import Container from '../components/Container';

const SupportPage = (props) => {
  const subpages = [
    { title: 'Shipping & Delivery', key: 'shipping' },
    { title: 'Returns & Exchanges', key: 'returns' },
    { title: 'Payments & Security', key: 'payments' },
    { title: 'Warranty & Installation', key: 'warranty' },
    { title: 'Contact Us', key: 'contact' },
    { title: 'Privacy Policy', key: 'policy' },
  ];

  const [current, setCurrent] = useState(subpages[4]);

  const renderElement = (key) => {
    switch (key) {
      case 'contact':
        return <Contact />;
      case 'policy':
      case 'shipping':
      case 'returns':
      case 'payments':
      case 'warranty':
        return <Policy section={key} />; // Pass key to customize Policy content
      default:
        return <React.Fragment />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.location.hash) {
      const hash = props.location.hash.substring(1);
      const tempCurrent = subpages.find((detail) => detail.key === hash);
      if (tempCurrent && tempCurrent.key !== current.key) {
        setCurrent(tempCurrent);
        window.scrollTo({ top: 475, behavior: 'smooth' });
      }
    }
  }, [props.location]);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={current.title}
          bgImage={'/support-tiles.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />

        <div className={styles.navContainer}>
          {subpages.map((details) => (
            <ThemeLink
              key={details.key}
              onClick={() => navigate(`/support#${details.key}`)}
              isActive={current.key === details.key}
              to={`/support#${details.key}`}
            >
              {details.title}
            </ThemeLink>
          ))}
        </div>

        <div className={styles.pageContainer}>
          <Container size={'large'} spacing={'min'}>
            {subpages.map((details) => (
              <div
                key={details.key}
                className={`${styles.content} ${
                  current.key === details.key ? styles.show : styles.hide
                }`}
              >
                {renderElement(details.key)}
              </div>
            ))}
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
