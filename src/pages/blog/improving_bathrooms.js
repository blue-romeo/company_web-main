import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const BathroomUpgrade = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'home improvement'}
              title={'5 Affordable Ways to Upgrade Your Bathroom'}
              image={'/blogs/home_improvement2.jpg'}
              alt={'modern upgraded bathroom'}
            >
              <div className={styles.content}>
                <p className={styles.blogParagraph}>
                Upgrading your bathroom doesn't always mean a full renovation.
                Sometimes, small and affordable tweaks can breathe new life into your space.
                Whether you crave a cozy, spa-like feel or a clean, modern refresh,
                these five affordable upgrades will help you transform your bathroom on a budget.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>1. Swap Out Your Hardware</h2>
                <p className={styles.blogParagraph}>
                Replacing outdated cabinet handles, drawer pulls, and towel hooks is one of the easiest ways to modernize your bathroom.
                Go for sleek finishes like matte black, brushed gold, or chrome to give your space a quick and stylish facelift.
                Sets can often be found for under $50, making this a budget-friendly change with high impact.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Upgrade Your Lighting</h2>
                <p className={styles.blogParagraph}>
                Lighting sets the tone for your bathroom.
                Swap out old, harsh fixtures for modern designs with warm LED bulbs.
                The right lighting can make the space feel larger, cozier, and more inviting.
                You’ll be surprised how much this simple switch enhances the overall mood.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>3. Add a Fresh Coat of Paint</h2>
                <p className={styles.blogParagraph}>
                Paint is a transformative tool.
                Choose soothing neutrals for a spa vibe, bold dark hues for a modern edge, or airy pastels for a light, calming space.
                A single can of paint can give your bathroom a brand-new personality at a very affordable price.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>4. Incorporate Plants and Greenery</h2>
                <p className={styles.blogParagraph}>
                Houseplants add life, freshness, and a touch of nature.
                Choose varieties that thrive in humidity, like ferns, pothos, or peace lilies.
                Not only do they improve air quality, but they also make your bathroom feel like a serene, welcoming retreat.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>5. Revamp Your Shower Curtain and Accessories</h2>
                <p className={styles.blogParagraph}>
                Coordinating your shower curtain, bath mat, soap dispensers, and towels creates a polished, cohesive look.
                Swap mismatched accessories for a well-thought-out color scheme or pattern to instantly refresh your space.
                It’s affordable, fun, and makes a big visual difference.
                </p>
              </div>

              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/blogs/home_improvement3.jpg')} alt={'bathroom accessories upgrade'} />
                </div>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Final Thoughts</h2>
                <p className={styles.blogParagraph}>
                A bathroom upgrade doesn't have to be expensive or time-consuming.
                These five simple changes prove that small improvements can make a big impact.
                Whether you're aiming for comfort, style, or function, these affordable ideas are a great place to start.
                Happy upgrading!
                </p>
              </div>

            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default BathroomUpgrade;
