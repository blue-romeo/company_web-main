import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const CleaningPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'design'}
              title={'How to Maintain and Clean Your Tiles for Long-Lasting Beauty'}
              image={'/cleaning_tiles.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.blogParagraph}>
                Tiles add elegance and durability to any space, 
                but to keep them looking fresh and beautiful, 
                regular maintenance is essential. Whether in the kitchen, 
                bathroom, or flooring throughout your home, proper cleaning 
                and care can extend the lifespan of your tiles while preserving their shine. 
                Follow these tips to keep your tiles in top condition.
                </p>
              </div>
              <div className={styles.content}>  
                <h2 className={styles.blogSubHeader}>Daily & Weekly Cleaning Routine</h2>
                <h3 className={styles.blogSubHeader}>1. Sweep or Vacuum Regularly</h3>
                <p className={styles.blogParagraph}>
                Dust, dirt, and debris can scratch tile surfaces over time. 
                Sweeping or vacuuming at least once a week prevents buildup and keeps tiles looking new.
                </p>
              </div>
              <div className={styles.content}>
                <h3 className={styles.blogSubHeader}>2. Mop with a Gentle Cleaner</h3>
                <p className={styles.blogParagraph}>
                Use warm water and a mild detergent to mop your tile floors.
                Avoid harsh chemicals that may damage the tile surface or grout.
                For a natural cleaning solution, mix equal parts of water and white vinegar.
                </p>
                <h3 className={styles.blogSubHeader}>3. Wipe Spills Immediately</h3>
                <p className={styles.blogParagraph}>
                Spills can stain tiles and grout, especially if they are porous. 
                Use a damp cloth or sponge to clean spills as soon as they occur.
                </p>
                <h2 className={styles.blogSubHeader}>Deep Cleaning Tips </h2>
                <h3 className={styles.blogSubHeader}>1. Scrub Grout Lines </h3>
                <p className={styles.blogParagraph}>
                Grout is porous and absorbs dirt and grime easily. To clean grout effectively:
                <ul className="grout-cleaning-list">
                <li>•	Use a mixture of baking soda and water to create a paste.</li>
                <li>•	Apply the paste to the grout lines and scrub with a toothbrush or grout brush.</li>
                <li>•	Rinse with warm water and dry thoroughly.</li>
                <li>•	For stubborn stains, use a grout cleaner or a mixture of hydrogen peroxide and baking soda.</li>
                </ul>
                </p>
              </div>
                <div className={styles.content}>
                <h3 className={styles.blogSubHeader}>2. Apply Tile Adhesive</h3>
                <p className={styles.blogParagraph}>
                <ul className="applying adhesive-list">
                <li>For grease stains (common in kitchens), use warm water with dish soap.</li>
                <li>For hard water stains (common in bathrooms), apply a mixture of vinegar 
                and water and let it sit for 5-10 minutes before scrubbing.</li>
                <li>For mold and mildew, use a mixture of hydrogen peroxide and water to prevent fungal growth.</li>
                </ul>
                </p>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>3. Lay the Tiles</h2>
                <p className={styles.blogParagraph}>
                <ul className="laying tiles-list">  
                <li>1.	Start from the Center: Begin placing tiles along the chalk lines, 
                pressing firmly into the mortar.</li>
                <li>2.	Use Tile Spacers: Place spacers between tiles to maintain consistent 
                gaps for grouting.</li>
                <li>3.	Check for Leveling: Use a level and rubber mallet to ensure tiles are even.</li>
                <li>4.	Continue Working in Sections: Apply adhesive and lay tiles section by section 
                to prevent it from drying out before placement.</li>
                </ul>
                </p>
                
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/cleaning_tiles1.jpg')} alt={'sample1'} />
                </div>
              
              
                <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Preventive Maintenance</h2>
                <h3 className={styles.blogSubHeader}>1. Seal Grout and Porous Tiles</h3>
                <p className={styles.blogParagraph}>
                Sealing grout lines and porous tiles (such as natural stone) helps prevent staining and moisture absorption. 
                Reseal them every 6-12 months for the best protection.
                </p>
                <h3 className={styles.blogSubHeader}>2. Use Mats and Rugs</h3>
                <p className={styles.blogParagraph}>
                Place mats or rugs in high-traffic areas to minimize wear and tear. 
                This is especially useful in entryways and kitchens where dirt and moisture are common.
                </p>
                <h3 className={styles.blogSubHeader}>3. Avoid Harsh Scrubbing Tools</h3>
                <p className={styles.blogParagraph}>
                Abrasive scrubbers, such as steel wool or harsh scouring pads, 
                can damage the tile surface. Instead, use a soft-bristled brush or microfiber cloth.
                </p>
                  </div>
                  <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Common Tile Types and Their Maintenance Needs</h2>
                <p className={styles.blogParagraph}>
                <ul className="setting tiles-list">
                <li>•	Ceramic & Porcelain - Use mild detergent and warm water; avoid oil-based cleaners.</li>
                <li>•	Natural Stone (Marble, Granite) - Use pH-neutral cleaner; avoid acidic substances like vinegar.</li>
                <li>•	Glass Tiles - Wipe with glass cleaner for streak-free shine.</li>
                <li>•	Terracotta - Seal regularly and clean with a damp mop.</li>
                </ul>

                </p>
                  </div>    
                
              </div>
              <div className={styles.content}>
                
                <h2 className={styles.blogSubHeader}>Final Thoughts</h2>
                <p className={styles.blogParagraph}>
                Regular cleaning and preventive maintenance can keep your tiles looking 
                as good as new for years to come. By following these simple yet effective cleaning practices, 
                you can enhance the durability and appearance of your tiled surfaces. 
                A little care goes a long way in preserving the beauty of your home!
                </p>
                <h2 className={styles.blogSubHeader}>7. Final Touches</h2>
                <p className={styles.blogParagraph}>
                  <ul className="final_touches-list">
                 <li>•	Clean the tiles with a dry cloth to remove any remaining haze.</li>
                 <li>•	Install baseboards or transition strips if necessary.</li>
                 <li>•	Enjoy your newly tiled floor!</li>
                </ul>

                </p>
                <h2 className={styles.blogSubHeader}>Tips for Success</h2>
                <p className={styles.blogParagraph}>
                <ul className="tips-list">
                <li>• Always mix mortar and grout in small batches to avoid drying out.</li>
                <li>• Keep a few extra tiles in case of future replacements.</li>
                <li>• Use a high-quality sealer for porous tiles like natural stone.</li>
                <li>• Work in a well-ventilated area and follow safety precautions.</li>
                </ul>
                By following these steps, you'll achieve a professional-looking tile floor 
                that enhances your space for years to come. Happy tiling!

                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default CleaningPage;
