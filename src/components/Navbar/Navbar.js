import React from "react";
import pluckSound from "../../assets/8bitpluck.mp3";
import "./Navbar.scss";
import Social from "../Social/Social";
import { NavLink } from "react-router-dom";
const Navbar = ({screenSize}) => {
  let audio = new Audio(pluckSound);
  const handleClick = () => {
    audio.play();
  };
  return (
    <div className='navbar-container'>
      <nav className="navbar nes-container is-dark is-rounded">
        <NavLink onClick={handleClick} exact to="/" className="nes-btn" activeClassName="is-primary">
          Home
        </NavLink>
        <NavLink onClick={handleClick} to="/about" className="nes-btn " activeClassName="is-primary">
          About
        </NavLink>
        <NavLink onClick={handleClick} to="/projects" className="nes-btn" activeClassName="is-primary">
          Projects
        </NavLink>
        <Social screenSize={'desktop'}/>
      </nav>
      <nav className='mobile nes-container is-dark is-rounded'>
        <NavLink onClick={handleClick} exact to="/" className="nes-btn" activeClassName="is-primary">
            Home
          </NavLink>
          <NavLink onClick={handleClick} to="/about" className="nes-btn " activeClassName="is-primary">
            About
          </NavLink>
          <NavLink onClick={handleClick} to="/projects" className="nes-btn" activeClassName="is-primary">
            Projects
        </NavLink>
        <Social screenSize={screenSize}/>
      </nav>
    </div>
  );
};

export default Navbar;
