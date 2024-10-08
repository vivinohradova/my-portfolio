import { useState } from "react";
import { FaHamburger, FaArrowRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (index, sectionId) => {
    setCurrentIndex(index);
    setIsOpen(false);

    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });

    if (window.innerWidth >= 521 && window.innerWidth <= 768) {
      setTimeout(() => {
        window.scrollBy(0, -50);
      }, 500);
    } else if (window.innerWidth < 521) {
      setTimeout(() => {
        window.scrollBy(0, -40);
      }, 500);
    }
  };

  return (
    <>
      <header>
        <section id="home" className={styles.container}>
          <div className={styles.top}>
            <img src={logo} alt="icon" />

            <nav className={styles.hamburger}>
              {isOpen ? (
                <RxCross1 onClick={handleClickHamburger} />
              ) : (
                <FaHamburger onClick={handleClickHamburger} />
              )}
            </nav>
           
          </div>
          {/* Mobile */}
          <div className={styles.mobile}>
            <div className={` ${isOpen ? styles.menuOpen : styles.menuClose}`}>
              <div className={styles.social}>
                <a
                  href="https://www.linkedin.com/in/viktoriia-vynohradova/"
                  target="blank"
                >
                  <p>Linkedin</p>
                </a>

                <a
                  href="https://www.instagram.com/frontend_vika/"
                  target="blank"
                >
                  <p>Instagram</p>
                </a>
                <a href="https://t.me/vinohradova_frontend" target="blank">
                  <p>Telegram</p>
                </a>
              </div>

              <nav className={styles.menu}>
                <li
                  className={`${currentIndex === 0 ? styles.active : ""}`}
                  onClick={() => handleNavClick(0, "home")}
                >
                  <FaArrowRight className={styles.arrow} />
                  Home
                </li>
                <li
                  className={`${currentIndex === 1 ? styles.active : ""}`}
                  onClick={() => handleNavClick(1, "about")}
                >
                  <FaArrowRight className={styles.arrow} />
                  About me
                </li>
                <li
                  className={`${currentIndex === 2 ? styles.active : ""}`}
                  onClick={() => handleNavClick(2, "tooling")}
                >
                  <FaArrowRight className={styles.arrow} />
                  Tooling
                </li>
                <li
                  className={`${currentIndex === 3 ? styles.active : ""}`}
                  onClick={() => handleNavClick(3, "works")}
                >
                  <FaArrowRight className={styles.arrow} />
                  Works
                </li>
                <li
                  className={`${currentIndex === 4 ? styles.active : ""}`}
                  onClick={() => handleNavClick(4, "contacts")}
                >
                  <FaArrowRight className={styles.arrow} />
                  Contacts
                </li>
                <li
                  className={`${currentIndex === 5 ? styles.active : ""}`}
                  onClick={() => handleNavClick(5, "resume")}
                >
                  <FaArrowRight className={styles.arrow} />
                  Resume
                </li>
              </nav>
            </div>
          </div>

          {/* Desktop */}
          <div className={styles.desktop}>
            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/in/viktoriia-vynohradova/"
                target="blank"
              >
                <p>Linkedin</p>
              </a>

              <a href="https://www.instagram.com/frontend_vika/" target="blank">
                <p>Instagram</p>
              </a>
              <a href="https://t.me/vinohradova_frontend" target="blank">
                <p>Telegram</p>
              </a>
            </div>

            <nav className={styles.menu}>
              <li
                className={`${currentIndex === 0 ? styles.active : ""}`}
                onClick={() => handleNavClick(0, "home")}
              >
                <FaArrowRight className={styles.arrow} />
                Home
              </li>
              <li
                className={`${currentIndex === 1 ? styles.active : ""}`}
                onClick={() => handleNavClick(1, "about")}
              >
                <FaArrowRight className={styles.arrow} />
                About me
              </li>
              <li
                className={`${currentIndex === 2 ? styles.active : ""}`}
                onClick={() => handleNavClick(2, "tooling")}
              >
                <FaArrowRight className={styles.arrow} />
                Tooling
              </li>
              <li
                className={`${currentIndex === 3 ? styles.active : ""}`}
                onClick={() => handleNavClick(3, "works")}
              >
                <FaArrowRight className={styles.arrow} />
                Works
              </li>
              <li
                className={`${currentIndex === 4 ? styles.active : ""}`}
                onClick={() => handleNavClick(4, "contacts")}
              >
                <FaArrowRight className={styles.arrow} />
                Contacts
              </li>
              <li
                className={`${currentIndex === 5 ? styles.active : ""}`}
                onClick={() => handleNavClick(5, "resume")}
              >
                <FaArrowRight className={styles.arrow} />
                Resume
              </li>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
