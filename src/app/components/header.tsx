import React from "react";
import styles from "styles/header.module.css";
import logo from "assets/logo.png";
import phone from "assets/phone.svg";
import Image from "next/image";
const header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header_container}>
          <div className={styles.header_logo_container}>
            <Image src={logo} alt="company logo" className={styles.logo} />
          </div>

          <div className={styles.header_list_container}>
            <ul className={styles.header_list_ul}>
              <a>Service</a>
              <a>Cleaning</a>
              <a>Repair</a>
              <a>Replace</a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
