import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Button from "../../common/Button";
import { UpRightArrow, Menu } from "../../common/Icons";
import MoodPic from "../../assets/mood2.png";
import AOS from "aos";
import MoodCard from "../../common/MoodCard";

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
          <Button buttonClass={"hero-second-btn"} text={"Know how it works"} />
        </div>
      </div>
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
          <div className="how-it-works-second-div-first-grid">
            {["1", "2", "3", "4"].map((id) =>
              selectedOption === id ? (
                <div
                  key={id}
                  className="mood-analysation"
                  onClick={() => setSelectedOption(null)}
                >
                  <h3>
                    {id === "1" && "01. Data Collection"}
                    {id === "2" && "02. Data Analysis"}
                    {id === "3" && "03. Playlist Recommendations"}
                    {id === "4" && "04. Happy User"}
                  </h3>
                  <p>
                    {id === "1" && "Gets moods from users"}
                    {id === "2" && "Analyzes user moods"}
                    {id === "3" &&
                      "Recommends a playlist based on users' moods"}
                    {id === "4" && "Elevates users' moods"}
                  </p>
                </div>
              ) : (
                <MoodCard
                  key={id}
                  onClick={() => setSelectedOption(id)}
                  text={
                    id === "1"
                      ? "01. Data Collection"
                      : id === "2"
                      ? "02. Data Analysis"
                      : id === "3"
                      ? "03. Playlist Recommendations"
                      : "04. Happy User"
                  }
                  description={
                    id === "1"
                      ? "Gets moods from users"
                      : id === "2"
                      ? "Analyzes user moods"
                      : id === "3"
                      ? "Recommends a playlist based on users' moods"
                      : "Elevates users' moods"
                  }
                />
              )
            )}
          </div>
          <div>
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
                Get your your mood lit up with exceptional playlist tailored
                just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer ref={contactRef} id="footer">
        <div className="foot-menu-container">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => scrollToSection(homeRef)}>Home</li>
              <li onClick={() => scrollToSection(aboutRef)}>About</li>
              <li onClick={() => scrollToSection(contactRef)}>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Legal Links</h4>
            <ul>
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>Support and Contact</h4>
            <ul>
              <li>Email Support</li>
              <li>Phone Support</li>
            </ul>
          </div>
          <div>
            <h4>Stay Connected</h4>
            <ul>
              <li>X</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="m2m">MOOD2MUSIC</div>
      </footer>
    </div>
  );
}
