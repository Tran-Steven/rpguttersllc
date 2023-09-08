import React from "react";
import styles from "styles/listheader.module.css";
import logo from "assets/logo.png";
import phone from "assets/phone.svg";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header_container}>
          <div className={styles.header_logo_container}>
            <Image src={logo} alt="company logo" className={styles.logo} />
          </div>

          <div className={styles.header_list_container}>
            <ul className={styles.header_list_ul}>
              <a href="#gutter">Gutter Installation</a>
              <a href="#cleaning">Cleaning</a>
              <a href="#repair">Repair</a>
              <a href="#replace">Replace</a>
              <a href="#aboutus">About Us</a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
