import React from "react";

export default function Navbar() {
  return (
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
  );
}
