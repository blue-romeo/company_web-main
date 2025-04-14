import React from 'react';
import * as styles from './Policy.module.css';

const Policy = ({ section }) => {
  switch (section) {
    case 'shipping':
      return (
        <div className={styles.root}>
          <div className={styles.section}>
            <h3>1. Delivery</h3>
            <p>
                We deliver orders within Mombasa,Kilifi and Kwale counties. Charges depend on the quantity and location of the order. For orders outside these areas, we can arrange for a third-party courier service.
              </p>
              <p>
                Once your order is dispatched, you will receive an SMS or email with update on tracking information. You can also call our customer service line to check on your delivery status.
              </p>
          </div>
        </div>
      );

    case 'returns':
      return (
        <div className={styles.root}>
          <div className={styles.section}>
            <h3>2. Returns & Exchanges</h3>
            <p>
                You may return undamaged items within 14 days of delivery. Items must be in original packaging and in saleable condition. Orders on used accessories or cut tiles are non-refundable.
              </p>
              <p>
                Please keep your receipt to claim return or exchange.
              </p>
              <p>
                To start a return process, call +254 782800429.
              </p>
          </div>
        </div>
      );

    case 'payments':
      return (
        <div className={styles.root}>
          <div className={styles.section}>
            <h3>3. Payments & Security</h3>
           <p>
                We accept M-Pesa, bank transfers through KCB and Absa, and cash on delivery. For large commercial orders, payment plans can be arranged.
              </p>
              <p>
                All our prices include 16% VAT. We provide ETR receipts after the completion of every sale.If you are purchasing tiles or accessories in large quantities (for a construction project or resale), please contact us directly for a custom quote and bulk pricing.
              </p>
            
          </div>
        </div>
      );

    case 'warranty':
      return (
        <div className={styles.root}>
          <div className={styles.section}>
            <h3>4. Warranty & Installation</h3>
            <p>
                No warranty is provided for our products. However, we guarantee the quality of our products and will replace any defective items within 30 days of purchase.
              </p>
          </div>
        </div>
      );

    case 'policy':
      return (
        <div className={styles.root}>
          <div className={styles.section}>
            <h3>5. Privacy Policy</h3>
            <p>
              We collect your personal information only to fulfill your orders, improve our
              services, and keep in touch (if you’ve opted in).
            </p>
            <p>
              We do not share your data with third parties for marketing purposes. You can request
              to update or delete your personal data anytime by emailing kitchensandbathrooms@gmail.com.
            </p>
            
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.root}>
          <div className={styles.section}>
            <h3>Policy Not Found</h3>
            <p>The requested policy section could not be found. Please try again or contact support.</p>
          </div>
        </div>
      );
  }
};

export default Policy;
