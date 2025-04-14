import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Your Orders</span>
            <div className={styles.subSection}>
              <h3>Dou you deliver country wide?</h3>
              <p>
                We deliver orders within Mombasa,Kilifi and Kwale counties. Charges depend on the quantity and location of the order. For orders outside these areas, we can arrange for a third-party courier service.
              </p>
              <p>
                Once your order is dispatched, you will receive an SMS or email with update on tracking information. You can also call our customer service line to check on your delivery status.
              </p>
            </div>
            
            <div className={styles.subSection}>
              <h3>Do you offer installation services?</h3>
              <p>
                No, we do not offer installation services. However, we can recommend trusted contractors and installers in your area. Please contact us for more information.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Payment & Pricing</span>
            <div className={styles.subSection}>
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept M-Pesa, bank transfers through KCB and Absa, and cash on delivery. For large commercial orders, payment plans can be arranged.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Are your prices VAT inclusive?</h3>
              <p>
                Yes, all our prices include 16% VAT. We provide ETR receipts after the completion of every sale.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Do you offer discounts on bulk purchases?</h3>
              <p>
                Absolutely! If you are purchasing tiles or accessories in large quantities (for a construction project or resale), please contact us directly for a custom quote and bulk pricing.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Returns & Warranties</span>
            <div className={styles.subSection}>
              <h3>What is your return policy?</h3>
              <p>
                You may return undamaged items within 14 days of delivery. Items must be in original packaging and in saleable condition. Orders on used accessories or cut tiles are non-refundable.
              </p>
              <p>
                Please keep your receipt to claim return support.
              </p>
              <p>
                To start a return, call +254 782800429.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Do your products have a warranty?</h3>
              <p>
                No warranty is provided for our products. However, we guarantee the quality of our products and will replace any defective items within 30 days of purchase.
              </p>
              
            </div>
          </div>

          <div className={styles.section}>
            <span>Products & Availability</span>
            <div className={styles.subSection}>
              <h3>Do you have showrooms?</h3>
              <p>
                Yes, we have showrooms in all our branches namely: Mombasa, Bamburi and Mtwapa. You're welcome to visit and see our full range of tiles, toilets, sinks, and accessories. Check our “About Us” page for directions and hours.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Are all items in stock?</h3>
              <p>
                Most items listed on our website are in stock. However, high-demand products or imported items may have limited availability. If an item is out of stock, we'll notify you immediately with the next available date or suggest alternatives.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
