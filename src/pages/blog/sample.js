import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'design'}
              title={'How to Lay Tiles on the Floor: A Step-by-Step Guide'}
              image={'/laying_tiles.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.blogParagraph}>
                Laying floor tiles can transform the look of any room, 
                adding durability and style. Whether you're updating your kitchen, 
                bathroom, or living space, 
                following the right steps will ensure a professional finish.
                This guide will walk you through the process of laying tiles on the floor,
                from preparation to finishing touches.
                </p>
              </div>
              <div className={styles.content}>  
                <h2 className={styles.blogSubHeader}>Materials and Tools Needed</h2>
                <p className={styles.blogParagraph}>
                 <ul className="custom-list">
                  <li>• Floor tiles</li>
                  <li>• Tile Adhesive</li>
                  <li>• Grout</li>
                  <li>• Tile spacers</li>
                  <li>• Sealer</li>
                  <li>•	Tape measure</li>
                  <li>•	Chalk line</li>
                  <li>•	Notched trowel</li>
                  <li>•	Tile cutter (manual or electric)</li>
                  <li>•	Level</li>
                  <li>•	Rubber mallet</li>
                  <li>•	Sponge</li>
                  <li>•	Bucket</li>
                  <li>•	Tile spacers</li>
                  <li>•	Grout float</li>
                  <li>•	Knee pads (optional but recommended)</li>

                 </ul>
                </p>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>1. Prepare the Floor</h2>
                <h3 className={styles.blogSubHeader}>Clean the Surface </h3>
                <p className={styles.blogParagraph}>
                  Ensure that the floor is clean, dry, and level.
                   If there are any cracks or uneven surfaces, 
                   use a floor patching compound to smooth them out.
                </p>
                <h3 className={styles.blogSubHeader}>Measure and Plan </h3>
                <p className={styles.blogParagraph}>
                Measure the room and determine the tile layout.
               	Use a chalk line to mark the center point of the
                 room and create perpendicular guidelines. 
                 This ensures your tiles are laid symmetrically.
                </p>
                <h3 className={styles.blogSubHeader}>Dry Lay the Tiles </h3>
                <p className={styles.blogParagraph}>
                Before applying adhesive, lay out the tiles without mortar to 
                visualize the pattern and make necessary adjustments.
                </p>
              </div>
                <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Apply Tile Adhesive</h2>
                <p className={styles.blogParagraph}>
                <ul className="applying adhesive-list">
                <li>1.	Mix the Thin-Set Mortar: 
                Follow the manufacturer’s instructions to mix the adhesive to a smooth, 
                peanut butter-like consistency.</li>
                <li>2.	Spread the Adhesive:
                Use a notched trowel to spread the mortar onto a small section of the floor 
                (about 3-4 square feet at a time).</li>
                <li>3.	Comb the Mortar: Hold the trowel at a 45-degree angle 
                and create ridges in the adhesive for better grip.</li>
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
                  <img src={toOptimizedImage('/laying_tiles3.jpg')} alt={'sample1'} />
                </div>
              
              
                <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>4. Cut Tiles as Needed</h2>
                <p className={styles.blogParagraph}>
                <ul className="cutting tiles-list">
                <li>•	Use a tile cutter for straight cuts and a tile nipper for small adjustments.</li>
                <li>•	If tiling around pipes or obstacles, mark and cut the tile carefully to fit the space.</li>
                </ul>
                </p>
                  </div>
                  <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>5. Let the Tiles Set</h2>
                <p className={styles.blogParagraph}>
                <ul className="setting tiles-list">
                <li>•	Allow the tiles to set in place for 24 hours before applying grout.</li>
                <li>•	Avoid walking on the tiles during this time to ensure they adhere properly.</li>
                </ul>

                </p>
                  </div>    
                
              </div>
              <div className={styles.content}>
                
                <h2 className={styles.blogSubHeader}>6. Apply Grout</h2>
                <p className={styles.blogParagraph}>
                <ul className="grout-list">
                <li>1.	Remove Tile Spacers: Carefully take out spacers before grouting.</li>
                <li>2.	Mix the Grout: Follow instructions on the package to mix grout to a smooth consistency.</li>
                <li>3.	Apply with a Grout Float: Spread grout diagonally across the tiles, 
                ensuring the gaps are filled.</li>
                <li>4.	Wipe Off Excess Grout: Use a damp sponge to clean off extra grout before it dries.</li>
                <li>5.	Let It Cure: Allow grout to dry for 24-48 hours.</li>
                <li>6.	Seal the Grout (If Needed): Apply a grout sealer to prevent stains and moisture absorption.</li>
                </ul>
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

export default SamplePage;
