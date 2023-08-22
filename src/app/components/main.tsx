import React from "react";
import styles from "styles/main.module.css";
import Image from "next/image";
import background from "assets/crop.jpg";
const main = () => {
  return (
    <main>
      <section className={styles.wrapper}>
        <div>
          <div className={styles.heading}>
            <h2>Services We Provide</h2>
          </div>
        </div>
        <div>
          <div className={styles.heading} id="gutters">
            Gutter Installation
          </div>
          <div>
            <h3>5’ & 6’ Seamless Gutters</h3>
            <Image src={background} alt="Image of Seamless Gutters" />
          </div>
          <div>
            <h3>5’ & 6’ Gutter Guards </h3>
            <Image src={background} alt="Image of Gutter Guards" />
          </div>
        </div>
        <div>
          <div className={styles.heading} id="cleaning">
            Cleaning
          </div>
          <p>
            We are a family owned company. Founded by My Sergio Ruiz Sr. Now
            operated and run by Sergio Ruiz Jr. We are here to provide the best
            services for you. We provide anything and everything that happens to
            do with Gutters. From a simple cleaning to a whole house makeover.
            We have over 20 years of experience. We are located in the Athens,
            Ga area but provide services all over GA. We are here to serve all
            your Gutter needs !
          </p>
        </div>
        <div>
          <div className={styles.heading} id="repair">
            Repair
          </div>
          <p>
            We are a family owned company. Founded by My Sergio Ruiz Sr. Now
            operated and run by Sergio Ruiz Jr. We are here to provide the best
            services for you. We provide anything and everything that happens to
            do with Gutters. From a simple cleaning to a whole house makeover.
            We have over 20 years of experience. We are located in the Athens,
            Ga area but provide services all over GA. We are here to serve all
            your Gutter needs !
          </p>
        </div>
        <div>
          <div className={styles.heading} id="replace">
            Replace
          </div>
          <p>
            We are a family owned company. Founded by My Sergio Ruiz Sr. Now
            operated and run by Sergio Ruiz Jr. We are here to provide the best
            services for you. We provide anything and everything that happens to
            do with Gutters. From a simple cleaning to a whole house makeover.
            We have over 20 years of experience. We are located in the Athens,
            Ga area but provide services all over GA. We are here to serve all
            your Gutter needs !
          </p>
        </div>
        <div>
          <div className={styles.heading} id="aboutus">
            About Us
          </div>
          <p>
            We are a family owned company. Founded by My Sergio Ruiz Sr. Now
            operated and run by Sergio Ruiz Jr. We are here to provide the best
            services for you. We provide anything and everything that happens to
            do with Gutters. From a simple cleaning to a whole house makeover.
            We have over 20 years of experience. We are located in the Athens,
            Ga area but provide services all over GA. We are here to serve all
            your Gutter needs !
          </p>
        </div>
      </section>
    </main>
  );
};

export default main;
