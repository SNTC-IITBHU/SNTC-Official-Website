import React, { useEffect, useState } from "react";
import styles from "../styles/Nav.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isweb, setIsweb] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 768) {
        setIsweb(true);
      }
    }
  }, []);

  return (
    <nav className={styles.nav}>
      <img className={styles.nav_logo} src="/sntc_logo.png" alt="" />

      {(menuOpen || isweb) && (
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">About</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Contact</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Blog</a>
          </li>
        </ul>
      )}
      {!isweb && (
        <div
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
