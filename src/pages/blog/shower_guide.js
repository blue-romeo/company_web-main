import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const ShowerheadGuide = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'home improvement'}
              title={'How to Choose the Right Showerhead for a Relaxing Bath Experience'}
              image={'/showerhead_selection.jpg'}
              alt={'variety of modern showerheads'}
            >
              <div className={styles.content}>
                <p className={styles.blogParagraph}>
                A relaxing bath experience starts with the perfect showerhead. 
                Whether you're after a gentle rainfall, a strong massage spray, or an eco-friendly water-saving design, 
                the right showerhead can turn an ordinary shower into a daily spa retreat.
                Here’s how to select one that suits both your bathroom and your comfort.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>1. Understand the Different Showerhead Types</h2>
                <p className={styles.blogParagraph}>
                Before you buy, get familiar with the main types of showerheads:
                <ul className="custom-list">
                  <li>• Fixed showerheads — mounted directly to the wall for a classic, clean look.</li>
                  <li>• Handheld showerheads — attached to a flexible hose, perfect for versatility and cleaning.</li>
                  <li>• Rain showerheads — large and overhead, offering a soothing rainfall effect.</li>
                  <li>• Dual showerheads — combine fixed and handheld features for maximum flexibility.</li>
                </ul>
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Consider Spray Patterns and Settings</h2>
                <p className={styles.blogParagraph}>
                Look for showerheads that offer adjustable spray settings to match your mood. 
                From a strong, invigorating jet to a soft, misty spray — the right pattern can make your shower a relaxing ritual. 
                Multi-setting showerheads give you flexibility without needing extra gadgets.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>3. Check Water Pressure Compatibility</h2>
                <p className={styles.blogParagraph}>
                Your home’s water pressure plays a key role in choosing the right showerhead.
                High-pressure heads can enhance weak water flow, while rain-style heads work best in homes with strong, consistent pressure.
                Make sure to check the manufacturer’s guidelines to match your plumbing setup.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>4. Prioritize Water Efficiency</h2>
                <p className={styles.blogParagraph}>
                If you're eco-conscious, opt for a WaterSense-labeled showerhead.
                These models reduce water usage without sacrificing performance, 
                helping lower your utility bill while conserving water — win-win for your wallet and the planet.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>5. Match Style to Your Bathroom Decor</h2>
                <p className={styles.blogParagraph}>
                A showerhead should complement your bathroom's style.
                Whether you're going for modern chrome, rustic bronze, or sleek matte black,
                the right finish and design will tie your space together and make it feel polished and intentional.
                </p>
              </div>

              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/modern_showerhead.jpg')} alt={'stylish modern showerhead'} />
                </div>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Final Thoughts</h2>
                <p className={styles.blogParagraph}>
                Choosing the perfect showerhead is all about blending comfort, style, and practicality.
                With the right model, every shower can become a calming, spa-like escape that helps you unwind after a long day.
                Invest wisely, and your bathroom will thank you!
                </p>
              </div>

            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ShowerheadGuide;
