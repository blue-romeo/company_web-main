import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Highlight.module.css';
import { toOptimizedImage } from '../../helpers/general';

const Highlight = (props) => {
  const {
    image,
    altImage,
    miniImage,
    miniImageAlt,
    title,
    description,
    textLink,
    link,
  } = props;

  return (
    <div className={styles.root}>
      <img alt={altImage} src={toOptimizedImage(image)} className={styles.highlightImage} />
      <div className={styles.contentContainer}>
        <h3>{"Whats Hot"}</h3>
        <p>{"Canada White Ceramic Floor Tile - 600 x 600mm"}</p>
        <Link to={link}>{textLink}</Link>
        <img
          className={styles.miniImage}
          alt={miniImageAlt}
          src={toOptimizedImage(miniImage)}
        ></img>
      </div>
    </div>
  );
};

export default Highlight;
