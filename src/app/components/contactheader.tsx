import React from "react";
import styles from "styles/contactheader.module.css";
import phone from "assets/phone.svg";
import Image from "next/image";
const Contactheader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header_contact_container}>
        <div className={styles.header_logo_container}>
          <Image src={phone} alt="phone image" className={styles.phone} />
        </div>
        <div className={styles.header_contact_text}>
          Contact us for a free quote: 706-308-3658
        </div>
      </div>
    </div>
  );
};
export default Contactheader;
