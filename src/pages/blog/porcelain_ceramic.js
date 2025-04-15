import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const TileComparisonPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'tiles'}
              title={'Porcelain vs. Ceramic Tiles: Which One is Best for You?'}
              image={'/porcelain_vs_ceramic1.jpg'}
              alt={'Porcelain vs Ceramic Tiles'}
            >
              <div className={styles.content}>
                <p className={styles.blogParagraph}>
                  Choosing the right tile can make a big difference in both the style and functionality of your space. Two of the most popular tile options are porcelain and ceramic. They might look similar, but they offer different advantages depending on where and how you use them. Here’s a breakdown to help you make the best choice for your home or project.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>What’s the Difference?</h2>
                <p className={styles.blogParagraph}>
                  Both porcelain and ceramic tiles are made from clay, but they differ in terms of density, water absorption, and durability.
                </p>
                <ul className="difference-list">
                  <li>• Porcelain is made from finer clay and fired at higher temperatures, making it denser and more water-resistant.</li>
                  <li>• Ceramic is made from coarser clay and fired at lower temperatures, making it more porous and easier to cut.</li>
                </ul>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Pros and Cons of Porcelain Tiles</h2>
                <ul className="pros-cons-list">
                  <li>✅ Extremely durable and ideal for high-traffic areas.</li>
                  <li>✅ Very low water absorption—great for bathrooms and outdoor spaces.</li>
                  <li>✅ Comes in many styles, including wood- and stone-look designs.</li>
                  <li>⚠️ More difficult and expensive to cut and install.</li>
                  <li>⚠️ Generally more expensive than ceramic tiles.</li>
                </ul>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Pros and Cons of Ceramic Tiles</h2>
                <ul className="pros-cons-list">
                  <li>✅ More affordable and widely available.</li>
                  <li>✅ Easier to cut and install—great for DIY projects.</li>
                  <li>✅ Available in a wide range of colors and textures.</li>
                  <li>⚠️ Less water-resistant, especially if unglazed.</li>
                  <li>⚠️ Slightly less durable in heavy-use areas.</li>
                </ul>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Where Should You Use Each Tile?</h2>
                <ul className="usage-list">
                  <li>• <strong>Bathrooms & Kitchens:</strong> Porcelain is preferred due to its water resistance.</li>
                  <li>• <strong>Walls & Backsplashes:</strong> Ceramic is lighter and easier to install.</li>
                  <li>• <strong>Outdoor Spaces:</strong> Porcelain is frost-resistant and more durable outdoors.</li>
                  <li>• <strong>Low-Traffic Rooms:</strong> Ceramic works well in bedrooms or guest areas.</li>
                </ul>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Final Thoughts</h2>
                <p className={styles.blogParagraph}>
                  The choice between porcelain and ceramic tiles depends on your needs, space, and budget. Porcelain offers superior durability and moisture resistance, making it a long-term investment for busy areas. Ceramic, on the other hand, gives you a stylish look at a lower cost and with easier installation.
                </p>
                <p className={styles.blogParagraph}>
                  Still not sure which tile to choose? Visit our showroom or contact our team—we’re here to help you find the perfect tile for your space!
                </p>
              </div>

              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/porcelain_ceramic_comparison2.jpg')} alt={'Porcelain vs Ceramic comparison'} />
                </div>
              </div>

            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default TileComparisonPage;
