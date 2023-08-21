import React from "react";
import styles from "styles/contactheader.module.css";
import phone from "assets/phone.svg";
import Image from "next/image";
const contactheader = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Image src={phone} alt="phone image" />
      </div>
    </div>
  );
};
export default contactheader;
