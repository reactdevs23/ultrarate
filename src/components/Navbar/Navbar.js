import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { logo, smallLogo } from "../../images";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Button } from "../common";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuSunMedium } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { FiMoon } from "react-icons/fi";
import { useTheme } from "../ThemeContext/ThemeContext";
import Checkout from "../Checkout/Checkout";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { toggleTheme, isDarkTheme } = useTheme();
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const navtems = [
    {
      item: "Explore",
      to: "/exokire",
    },
    {
      item: "Create",
      to: "/create",
    },
    {
      item: "Sell",
      to: "/sell",
    },
  ];
  const sidebarHandler = () => {
    setSidebar((prev) => !prev);
  };
  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={clsx(classes.wrapper, isScrolled && classes.wrapperBg)}>
      {" "}
      <nav className={classes.navbar}>
        <div className={classes.logoAndNavitems}>
          {" "}
          <NavLink to="/">
            <img src={logo} alt="#" className={classes.dekstopLogo} />{" "}
            <img src={smallLogo} alt="#" className={classes.mobileLogo} />
          </NavLink>
          <div className={clsx(classes.navItems, sidebar && classes.sidebar)}>
            {navtems.map((el, i) => (
              <NavLink
                to={el.to}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? clsx(classes.navActive, classes.navItem)
                    : classes.navItem
                }
              >
                {el.item}
              </NavLink>
            ))}{" "}
            <div className={classes.inputContainer}>
              <input
                type="text"
                className={classes.input}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Type for collections, NFTs etc"
              />
              <Button
                onClick={() => {
                  setSidebar(false);
                }}
                surfaceMedium
                className={classes.searchButton}
              >
                <FiSearch />
              </Button>
            </div>
            <div className={classes.connectWalletAndThemeToggler}>
              <Button onClick={() => {}} className={classes.button}>
                Connect wallet
              </Button>
              <div className={classes.sunMoon}>
                <div
                  className={clsx(
                    classes.sun,
                    !isDarkTheme && classes.activeTheme
                  )}
                  onClick={toggleTheme}
                >
                  <LuSunMedium className={classes.sunIcon} />
                </div>
                <div
                  className={clsx(
                    classes.moon,
                    isDarkTheme && classes.activeTheme
                  )}
                  onClick={toggleTheme}
                >
                  <FiMoon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={sidebarHandler}
          surfaceSoft
          className={classes.tabSearchButton}
        >
          <FiSearch />
        </Button>
        <div className={classes.buttonContainer}>
          <Button onClick={() => {}} className={classes.button}>
            Connect wallet
          </Button>
          <Button
            onClick={() => {
              setCheckout((prev) => !prev);
            }}
            surfaceSoft
            className={classes.shopButton}
          >
            <RiShoppingBag4Line className={classes.shop} />
          </Button>{" "}
          <div className={classes.sunMoon}>
            <div
              className={clsx(classes.sun, !isDarkTheme && classes.activeTheme)}
              onClick={toggleTheme}
            >
              <LuSunMedium className={classes.sunIcon} />
            </div>
            <div
              className={clsx(classes.moon, isDarkTheme && classes.activeTheme)}
              onClick={toggleTheme}
            >
              <FiMoon />
            </div>
          </div>
          {sidebar ? (
            <IoMdClose className={classes.close} onClick={sidebarHandler} />
          ) : (
            <GiHamburgerMenu
              className={classes.hamburger}
              onClick={sidebarHandler}
            />
          )}
        </div>
        {checkout && <Checkout setCheckout={setCheckout} />}
      </nav>
    </div>
  );
};

export default Navbar;
