import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let foundersRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/bathroom_banner.jpg'}
          title={`Kitchen & Bathrooms \n A Kenyan brand since 2014`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Who We Are
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(foundersRef)} to={'#founders'}>
            Our Founders
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(valuesRef)}
            to={'#values'}
          >
            Our Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Our Branches
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
            Kitchen & Bathrooms is a trusted provider of premium tiles, sinks, 
            granite, sanitaryware, taps, and bathroom fittings. With a 
            commitment to quality, elegance, and functionality, the company 
            offers a wide range of products that cater to both residential and 
            commercial spaces.
            </p>
            <br />
            <br />
            <p>
            Founded in 2014, Kitchen & Bathrooms began as a small family business with a 
            passion for superior craftsmanship and innovative bathroom solutions. Today, we 
            are a trusted name in the industry, serving customers who demand style, quality, 
            and affordability in every product.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/kbh_front.jpg')}></img>
        </div>
        <br />
        <br />

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Founders</h3>
            <div ref={foundersRef}>
              <p>
              Mr. Mike Okeri and Mrs. Olpha Okeri, the visionaries behind  Kitchen & Bathrooms, 
              founded the company with a passion for high-quality interior solutions and a desire 
              to bring world-class designs to homes and businesses. With years of experience in the 
              industry, they recognized a gap in the market for premium yet affordable tiles, sanitaryware, 
              and fittings. Their dedication to excellence, innovation, and customer-centric service has 
              helped shape the company into a trusted name in the industry. Under their leadership,  
              Kitchen & Bathrooms has grown into a brand synonymous with elegance, reliability, and 
              superior craftsmanship.
              </p>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
              <img alt={'founder'} src={toOptimizedImage('/founder1.jpg')}></img>
              </div>
              <div className={styles.imageContainer}>
              <img alt={'founder'} src={toOptimizedImage('/founder2.jpg')}></img>
              </div>
              </div>
            </div>

            
            
            <h3>Values</h3>
            <div id={'#values'} ref={valuesRef}>
              <p>
              To be the leading provider of high-quality, stylish, and innovative 
              bathroom and kitchen solutions, setting new benchmarks in design, 
              durability, and customer satisfaction.
              <br />
              <br />
              
              <ol>
                <li>
                Quality: We are committed to delivering products of the highest
                quality, crafted with precision and attention to detail.
                </li>
                <li>
                Innovation: We strive to stay ahead of the curve by introducing
                new designs, materials, and technologies that enhance the
                functionality and aesthetics of our products.
                </li>
                <li>
                Customer Satisfaction: We put our customers first, offering
                personalized service, expert advice, and solutions that meet
                their unique needs.
                </li>
                <li>
                Integrity and Transparency: We conduct our business with honesty,
                integrity, and transparency, building trust with our customers,
                partners, and employees.
                </li>
                <li>  Sustainability: We are committed to sustainable practices that
                minimize our environmental impact and promote social
                responsibility.
                </li>
              </ol>
               
              </p>
              
            </div>
          </div>
        </Container>
        <Container size={'large'} spacing={'min'}>
  <div className={styles.content} ref={sustainabilityRef}>
    <h3>Our Branches</h3>
    <p>
      Kitchen & Bathrooms has multiple branches to serve customers efficiently. 
      Visit any of our locations for expert advice and a wide selection of premium products:
    </p>

    <div>
      <h3>Headquarters</h3>
      <p>
        <strong>Location:</strong> King'orani/Lumumba Road, Mombasa<br />
        <strong>Contact:</strong> 0782800429
      </p>
    </div>

    <div>
      <h3>Branch</h3>
      <p>
        <strong>Location:</strong> Malindi-Mtwapa Road opposite KCB Mtwapa, Mtwapa<br />
        <strong>Contact:</strong> 0753800429
      </p>
    </div>

    <div>
      <h3>Branch</h3>
      <p>
        <strong>Location:</strong> Old Malindi Road next to Palestina Stage, Bamburi, Mombasa<br />
        <strong>Contact:</strong> 0731800429
      </p>
    </div>
  </div>
</Container>


        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
