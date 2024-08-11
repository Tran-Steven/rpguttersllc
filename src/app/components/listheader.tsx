"use client"

import React, { useState } from "react";
import styles from "styles/listheader.module.css";
import logo from "assets/logo.png";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header_container}>
          <div className={styles.logo_and_burger}>
            <div className={styles.header_logo_container}>
              <Image src={logo} alt="company logo" className={styles.logo} priority />
            </div>
            <div className={styles.burger} onClick={toggleMenu}>
              <div className={`${styles.burger_line} ${menuOpen ? styles.open : ""}`}></div>
              <div className={`${styles.burger_line} ${menuOpen ? styles.open : ""}`}></div>
              <div className={`${styles.burger_line} ${menuOpen ? styles.open : ""}`}></div>
            </div>
          </div>
          <div className={`${styles.header_list_container} ${menuOpen ? styles.open : ""}`}>
            <ul className={styles.header_list_ul}>
              <li><a href="#gutter">Gutter Installation</a></li>
              <li><a href="#cleaning">Cleaning</a></li>
              <li><a href="#repair">Repair</a></li>
              <li><a href="#replace">Replace</a></li>
              <li><a href="#aboutus">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

