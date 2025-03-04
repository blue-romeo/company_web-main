import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const ToiletPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'Toilet'}
              title={'How to Choose the Right Toilet for Your Home'}
              image={'/toilet_blog1.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.blogParagraph}>
                Selecting the perfect toilet for your home is an important decision 
                that affects both functionality and aesthetics. With numerous options 
                available, understanding the different types, features, and styles will 
                help you make an informed choice. This guide will walk you through essential 
                factors to consider when choosing a toilet that complements your bathroom and meets your needs.
                </p>
              </div>
              <div className={styles.content}>  
                <h2 className={styles.blogSubHeader}>1. Consider the Toilet Type</h2>
                <h3 className={styles.blogSubHeader}>a. Two-Piece Toilets</h3>
                <p className={styles.blogParagraph}>
                <ul className="grout-cleaning-list">
                <li>•	The most common type, featuring a separate tank and bowl.</li>
                <li>•	Typically more affordable and easier to repair.</li>
                </ul>
                </p>
              </div>
              <div className={styles.content}>  
                <h2 className={styles.blogSubHeader}>1. Consider the Toilet Type</h2>
                <h3 className={styles.blogSubHeader}>a. Two-Piece Toilets</h3>
                <p className={styles.blogParagraph}>
                <ul className="grout-cleaning-list">
                <li>•	The most common type, featuring a separate tank and bowl.</li>
                <li>•	Typically more affordable and easier to repair.</li>
                </ul>
                </p>
              </div>
              <div className={styles.content}>  
                <h3 className={styles.blogSubHeader}>b. One-Piece Toilets</h3>
                <p className={styles.blogParagraph}>
                <ul className="grout-cleaning-list">
                <li>•	Sleek and modern, with the tank and bowl fused into a single unit.</li>
                <li>•	Easier to clean and more durable.</li>
                </ul>
                </p>
              </div>
              <div className={styles.content}>  
                <h3 className={styles.blogSubHeader}>c. Wall-Mounted Toilets</h3>
                <p className={styles.blogParagraph}>
                <ul className="grout-cleaning-list">
                <li>•	Mounted on the wall, with the tank concealed inside the wall.</li>
                <li>•	Space-saving and stylish, but requires professional installation.</li>
                </ul>
                </p>
              </div>
              <div className={styles.content}>  
                <h3 className={styles.blogSubHeader}>d. Smart Toilets</h3>
                <p className={styles.blogParagraph}>
                <ul className="grout-cleaning-list">
                <li>•	Feature bidet functions, heated seats, automatic flushing, and self-cleaning technology.</li>
                <li>•	High-end option for luxury bathrooms.</li>
                </ul>
                </p>
              </div>
              <div className={styles.content}>
                <h3 className={styles.blogSubHeader}>2. Choose the Right Bowl Shape</h3>
                <p className={styles.blogParagraph}>
                Toilet bowls come in two main shapes:
                <ul className="grout-cleaning-list">
                <li>• Round Bowl - Compact and ideal for small bathrooms.</li>
                <li>• Elongated Bowl - More comfortable, offering extra seating space.</li>
                </ul>
                </p>
                <div className={styles.content}>
                <h3 className={styles.blogSubHeader}>3. Consider the Flush System</h3>
                <p className={styles.blogParagraph}>
                A toilet's flushing performance determines water efficiency and waste removal:
                <ul className="grout-cleaning-list">
                <li>• Gravity-Flush Toilets - Use the force of gravity to move water and waste.</li>
                <li>• Pressure-Assisted Toilets - Powerful flush with pressurized air; great for
                     commercial or high-traffic bathrooms.</li>
                <li>• Water-Saving Toilets - Use less water per flush, often labeled as WaterSense certified.</li>
                </ul>
                </p>

              </div>
                <div className={styles.content}>
                <h3 className={styles.blogSubHeader}>4. Height and Comfort</h3>
                <p className={styles.blogParagraph}>
                <ul className="applying adhesive-list">
                <li>• Standard Height (14-15 inches) - Traditional size, best for children and shorter individuals.</li>
                <li>• Comfort Height (16-19 inches) - ADA-compliant, making it easier for the elderly and people with mobility issues.</li>
                </ul>
                </p>
              </div>                
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/toilet_blog2.jpg')} alt={'sample1'} />
                </div>
                </div>
                <div className={styles.content}>
                <h3 className={styles.blogSubHeader}>5. Style and Aesthetics</h3>
                <p className={styles.blogParagraph}>
                Your toilet should blend seamlessly with your bathroom's design:
                <ul className="grout-cleaning-list">
                <li>• Modern Toilets - Sleek, minimalistic designs with concealed traps.</li>
                <li>• Traditional Toilets - Classic styles with decorative details.</li>
                <li>• Custom Colors - White is most common, but black, gray, or even 
                    pastel-colored toilets can make a statement.</li>
                </ul>
                </p>
                </div>
                <div className={styles.content}>
                <h3 className={styles.blogSubHeader}>6. Budget Considerations</h3>
                <p className={styles.blogParagraph}>
                Toilets range in price based on features and design:
                <ul className="grout-cleaning-list">
                <li>• Basic Models: KSH10,000 - KSH12,000</li>
                <li>• Mid-Range Toilets: KSH16,000 - KSH20,000</li>
                <li>• Luxury/Smart Toilets: KSH35,000+</li>
                </ul>
                </p>
                </div>
                <div className={styles.content}>
                <h3 className={styles.blogSubHeader}>7. Installation and Maintenance</h3>
                <p className={styles.blogParagraph}>
                Toilets range in price based on features and design:
                <ul className="grout-cleaning-list">
                <li>• Ensure the rough-in measurement (distance from the wall to the drain pipe) 
                    matches your space.</li>
                <li>• Opt for a toilet with an easy-to-clean design.</li>
                <li>• Consider professional installation for complex models like wall-mounted toilets.</li>
                </ul>
                </p>
                </div>
              
                <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Preventive Maintenance</h2>
                <p className={styles.blogParagraph}>
                Choosing the right toilet goes beyond aesthetics, it's about functionality, comfort, 
                and efficiency. Whether you opt for a classic two-piece or a high-tech smart toilet, 
                investing in the right one will enhance your bathroom experience for years to come.
                </p>
               
                <p className={styles.blogParagraph}>
                Need expert advice or premium sanitaryware? Explore our collection of high-quality 
                toilets and bathroom fittings today!
                </p>
                
            </div>
                      
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ToiletPage;
