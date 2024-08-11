import React from "react";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.fcontainer}>
        <div className={styles.generalFooter}>
          <section className={styles.section}>
            <div className={styles.grid}>
              <div className={styles.group}>
                <div className={styles.customWidget}>
                  <div className={styles.copyright}>
                    <div>© 2024&nbsp;</div>
                    <div>
                      <p className={styles.rteBlock}>
                        &nbsp;All Rights Reserved | R.P. GUTTERS LLC
                      </p>
                      <p className={styles.rteBlock}>
                        Phone: 706-308-3658
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.poweredBy}></div>
    </footer>
  );
};

export default Footer;

