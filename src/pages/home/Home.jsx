import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Button from "../../common/Button";
import { UpRightArrow, Menu } from "../../common/Icons";
import MoodPic from "../../assets/mood2.png";
import AOS from "aos";
import MoodCard from "../../common/MoodCard";
import FooterMenuItem from "../../common/FooterMenuItems";

export default function Home() {
  AOS.init({
    duration: 500,
  });

  const [showMenu, setShowMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container" id="/">
      <div
        data-aos="fade-down-right"
        data-aos-delay="1500"
        className={`navbar-container ${isSticky ? "sticky" : " "}`}
      >
        <h1 className="navbar-title">m2m</h1>
        <ul className="navbar-list">
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
        <Button
          buttonClass={"navbar-button"}
          text={"Try it"}
          icon={<UpRightArrow size={25} />}
        />
        {/* <div onClick={toggleMenu}>
          <Button icon={<Menu size={25} />} />
        </div> */}
      </div>
      <div ref={homeRef} className="hero-container">
        <p
          data-aos-delay="900"
          data-aos="fade-down"
          className="hero-start-text"
        >
          start your day with a smile...
        </p>
        <img
          data-aos-delay="1100"
          data-aos="fade-down-right"
          className="hero-img"
          src={MoodPic}
          alt="mood"
        />
        <h1 data-aos-delay="500" data-aos="fade-up" className="hero-text">
          mood2music
        </h1>
        <p>...Your personal music recommendator</p>
        <div className="hero-btns">
          <Button buttonClass={"hero-first-btn"} text={"Features"} />
          <Button
            buttonOnclick={() => scrollToSection(aboutRef)}
            buttonClass={"hero-second-btn"}
            text={"Know how it works"}
          />
        </div>
      </div>
      <div className="feature-container"></div>
      <div ref={aboutRef} className="how-it-works-container">
        <div className="how-it-works-first-div">
          <div className="how-it-works-first-div-first-grid">
            <Button
              buttonClass={"how-m2m-works-button"}
              text={"How It Works"}
            />
            <h2 className="how-m2m-works">How m2m Works</h2>
          </div>
          <div className="how-it-works-first-div-second-grid">
            <p>
              {" "}
              Get your your mood lit up with exceptional playlist tailored just
              for you.
            </p>
          </div>
        </div>
        <div className="how-it-works-second-div">
          <div className="how-it-works-second-div-grid">
            <MoodCard
              text={"01. Data Collection"}
              description={"Gets moods from users"}
            />
            <MoodCard
              text={"03. Playlist Recommendations"}
              description={"Recommends a playlist based on users' moods"}
            />
          </div>
          <div className="how-it-works-second-div-grid">
            <MoodCard
              text={"02. Data Analysis"}
              description={"Analyzes user moods"}
            />
            <MoodCard
              text={"04. Happy User"}
              description={"Elevates users' moods"}
            />
          </div>
        </div>
      </div>
      <div className="contact-conatiner"></div>
      <footer ref={contactRef} id="footer">
        <div className="foot-menu-container">
          <FooterMenuItem
            title={"Quick Links"}
            first={"Home"}
            firstClick={() => scrollToSection(homeRef)}
            second={"About"}
            secondClick={() => scrollToSection(aboutRef)}
            third={"Contact"}
            thirdClick={() => scrollToSection(contactRef)}
          />
          <FooterMenuItem
            title={"Legal Links"}
            first={"Terms Of Services"}
            second={"Privacy Policy"}
          />
          <FooterMenuItem
            title={"Support and Contact"}
            first={"Email Support"}
            second={"Phone Support"}
          />
          <FooterMenuItem
            title={"Stay Connected"}
            first={"X"}
            firstLink={"https://x.com/VictoryOseiwe"}
            second={"LinkedIn"}
            secondLink={"https://linkedin.com/in/victoryoseiwe"}
            third={"Youtube"}
            thirdLink={"http://www.youtube.com/@victory.oseiwe"}
            fourth={"Facebook"}
            fourthLink={"https://www.facebook.com/InveztorForum/"}
          />
        </div>
        <hr />
        <div className="m2m">MOOD2MUSIC</div>
      </footer>
    </div>
  );
}
