import React, { useState } from "react";
import classes from "./Footer.module.css";
import clsx from "clsx";
import { smallLogo } from "../../images";
import { Button, Heading, Text } from "../common";

import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState(" ");
  return (
    <footer className={classes.wrapper}>
      <div className={clsx(classes.container)}>
        <div className={classes.topBar}>
          <div>
            <img src={smallLogo} alt="#" className={classes.logo} />
          </div>
          <div className={classes.itemsContainer}>
            <div className={classes.items}>
              <Heading base primary semiBold className={classes.heading}>
                Marketplace
              </Heading>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Explore
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Jobs
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Help
              </a>
            </div>{" "}
            <div className={classes.items}>
              <Heading base primary semiBold className={classes.heading}>
                Links
              </Heading>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                API
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Token
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Branding
              </a>
            </div>{" "}
            <div className={classes.items}>
              <Heading base primary semiBold className={classes.heading}>
                Socials
              </Heading>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Facebook
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Discord
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className={classes.middleBar}>
          <div className={classes.joinNewsLetter}>
            <Heading xsMedium primary className={classes.label}>
              Join our newsletter
            </Heading>
            <Text base secondary className={classes.text}>
              Keep up to date with us
            </Text>
          </div>
          <div className={classes.inputWrapper}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.input}
            />
            <Button onClick={() => {}} className={classes.button}>
              Submit <FiArrowRight />
            </Button>
          </div>
        </div>
        <div className={classes.bottomBar}>
          <p className={classes.copyRight}>
            © Copyright 2023 verona, Inc. All rights reserved.
          </p>
          <div className={classes.tabs}>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={classes.tab}
            >
              Terms of Service
            </a>{" "}
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={classes.tab}
            >
              Privacy Policy
            </a>{" "}
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={classes.tab}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
