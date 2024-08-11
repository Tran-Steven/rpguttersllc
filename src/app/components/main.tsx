"use client";
import React, { useState } from "react";
import styles from "styles/main.module.css";
import Image from "next/image";
import gutter from "assets/crop.jpg";
import seamless from "assets/crop2.jpg";

const Main = () => {
  const [selectedOption, setSelectedOption] = useState('seamless');

  return (
    <main>
      <section className={styles.wrapper}>
        <div>
          <div className={styles.heading}>
            <h2>Services</h2>
          </div>
        </div>
        <div>
          <div className={styles.heading} id="gutters">
            Gutter Installation
          </div>
          <div>
            <div className={styles.imageheadercontainer}>
              <button
                className={`${styles.imageheader} ${selectedOption === 'seamless' ? styles.active : styles.inactive}`}
                onClick={() => setSelectedOption('seamless')}
                disabled={selectedOption === 'seamless'}
              >
                <h3>5’ & 6’ Seamless Gutters</h3>
              </button>
              <button
                className={`${styles.imageheader} ${selectedOption === 'guards' ? styles.active : styles.inactive}`}
                onClick={() => setSelectedOption('guards')}
                disabled={selectedOption === 'guards'}
              >
                <h3>5’ & 6’ Gutter Guards</h3>
              </button>
            </div>

            {selectedOption === 'seamless' && (
              <div className={styles.imagecontainer}>
                <Image
                  src={seamless}
                  alt="Image of Seamless Gutters"
                  className={styles.image}
                />
              </div>
            )}

            {selectedOption === 'guards' && (
              <div className={styles.imagecontainer}>
                <Image
                  src={gutter}
                  alt="Image of Gutter Guards"
                  className={styles.image}
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <div className={styles.heading} id="cleaning">
            Cleaning
          </div>
          <p className={styles.content}>
            We are a family owned company. Founded by My Sergio Ruiz Sr. Now
            operated and run by Sergio Ruiz Jr. We are here to provide the best
            services for you. We provide anything and everything that happens to
            do with Gutters. From a simple cleaning to a whole house makeover.
            We have over 20 years of experience. We are located in the Athens,
            Ga area but provide services all over GA. We are here to serve all
            your Gutter needs!
          </p>
        </div>
        <div>
          <div className={styles.heading} id="repair">
            Repair
          </div>
          <p className={styles.content}>
            We are a family owned company. Founded by My Sergio Ruiz Sr. Now
            operated and run by Sergio Ruiz Jr. We are here to provide the best
            services for you. We provide anything and everything that happens to
            do with Gutters. From a simple cleaning to a whole house makeover.
            We have over 20 years of experience. We are located in the Athens,
            Ga area but provide services all over GA. We are here to serve all
            your Gutter needs!
          </p>
        </div>
        <div>
          <div className={styles.heading} id="replace">
            Replace
          </div>
          <p className={styles.content}>
            We are a family owned company. Founded by My Sergio Ruiz Sr. Now
            operated and run by Sergio Ruiz Jr. We are here to provide the best
            services for you. We provide anything and everything that happens to
            do with Gutters. From a simple cleaning to a whole house makeover.
            We have over 20 years of experience. We are located in the Athens,
            Ga area but provide services all over GA. We are here to serve all
            your Gutter needs!
          </p>
        </div>
        <div>
          <div className={styles.heading} id="aboutus">
            About Us
          </div>
          <p className={styles.content}>
            We are a family owned company. Founded by My Sergio Ruiz Sr. Now
            operated and run by Sergio Ruiz Jr. We are here to provide the best
            services for you. We provide anything and everything that happens to
            do with Gutters. From a simple cleaning to a whole house makeover.
            We have over 20 years of experience. We are located in the Athens,
            Ga area but provide services all over GA. We are here to serve all
            your Gutter needs!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;

