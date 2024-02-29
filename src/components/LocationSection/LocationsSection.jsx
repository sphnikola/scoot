import React from "react";
//import { StaticImage } from 'gatsby-plugin-image';
//import Button from '../button/button';
//import Button from "../Button";

import * as styles from "./locationsSection.module.css";
// import * as styles from "./locationsSection.module.css";
import map_mobile from "../../assets/images/world-map-mobile.png";
import map_desktop from "../../assets/images/world-map-desktop.png";

const LocationsSection = () => {
  return (
    <section className={styles.locationsSection}>
      <div className={styles.map}>
        <img src={map_desktop} />

        <div className={`${styles.locationMarker} ${styles.newYorkMarker}`}>
          New York
        </div>
        <div className={`${styles.locationMarker} ${styles.londonMarker}`}>
          London
        </div>
        <div className={`${styles.locationMarker} ${styles.yokohamaMarker}`}>
          Yokohama
        </div>
        <div className={`${styles.locationMarker} ${styles.jakartaMarker}`}>
          Jakarta
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>Your city not listed?</h2>
        <p className={styles.text}>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        {/* <Button text="Message Us" /> */}
        {/* <Button>Message Us</Button> */}
      </div>
    </section>
  );
};

export default LocationsSection;
