import React from "react";
import { BsShare } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";

import { FiRefreshCw, FiPlus } from "react-icons/fi";

import { extraordinaryApe, verify, whistleApe } from "../../../images";
import { Button, Heading, Text } from "../../common";
import classes from "./HeroSection.module.css";
import clsx from "clsx";

const HeroSection = () => {
  const details = [
    { key: "Medium", value: "Dynamic" },
    { key: "Dimension", value: "3840x2160" },
    { key: "File Size", value: "100 KB" },
    { key: "Contract Address", value: "Dynamic" },
    { key: "Token Standard", value: "89324JKK" },
    { key: "Blockchain", value: "Ethereum" },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <img src={whistleApe} alt="#" className={classes.img} />

        <div className={classes.infoContainer}>
          <div className={classes.verificationContainer}>
            <img src={verify} alt="#" className={classes.verifyIcon} />
            <Text xs secondary>
              Winter Madagascar
            </Text>
          </div>{" "}
          <Heading medium primary semiBold className={classes.name}>
            Whistle Ape
          </Heading>
          <div className={classes.ownedBy}>
            <Text base secondary>
              Owned by
            </Text>{" "}
            <Text base primary className={classes.owner}>
              HN98333
            </Text>
          </div>
          <div className={classes.buttonContainer}>
            {/* if you want you can pass onClick instead of link */}
            <Button link="#" surfaceSoft>
              <BsShare /> Share
            </Button>
            <Button link="#" surfaceSoft>
              <FiRefreshCw /> Refresh metadata
            </Button>
            <Button onClick={() => {}} surfaceSoft className={classes.more}>
              <IoIosMore className={classes.moreIcon} />
            </Button>
          </div>
          <div className={classes.priceAndBuyContainer}>
            <div className={classes.priceContainer}>
              <Heading base secondary>
                Price
              </Heading>
              <div className={classes.price}>
                <Heading medium primary className={classes.ethPrice}>
                  0.005{" "}
                  <Text base secondary className={classes.currency}>
                    ETH
                  </Text>
                </Heading>
                <Text base secondary className={classes.usdPrice}>
                  $863.22
                </Text>
              </div>
            </div>
            <div className={classes.buyContainer}>
              <Button onClick={() => {}} wFull>
                Buy Now
              </Button>{" "}
              <Button onClick={() => {}}>
                <FiPlus className={classes.plusIcon} />
              </Button>
            </div>{" "}
            <Button secondary onClick={() => {}} wFull>
              Place a bid
            </Button>{" "}
          </div>
        </div>
      </div>
      <div className={clsx("container", classes.container)}>
        <div className={classes.descriptionContainer}>
          <Heading base primary>
            Description
          </Heading>
          <Text base secondary>
            Phasellus pharetra porta sodales. Quisque a felis neque. Vivamus sed
            vulputate ex. Donec ullamcorper pharetra efficitur. Donec faucibus
            sapien non tellus dignissim placerat vel a ex. Ut cursus lorem vel
            leo mollis, commodo faucibus tellus volutpat.
          </Text>{" "}
          <Text base secondary>
            Quisque eros mi, aliquet fringilla nibh eget, interdum ullamcorper
            velit. Etiam cursus faucibus tortor, vel lacinia mauris volutpat et.
            Sed nec sem magna. Sed et sagittis lectus. Nam viverra, lectus
            maximus euismod mollis, nibh sem imperdiet orci, ultrices sagittis
            sem purus nec dolor.
          </Text>
          <div className={classes.extraordinaryApe}>
            <div className={classes.info}>
              <Heading base primary semiBold>
                Extraordinary Ape
              </Heading>
              <Text xs secondary>
                Extraordinary Ape
              </Text>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.viewColloection}
              >
                View collection
              </a>
            </div>
            <div className={classes.apeImgContainer}>
              <img src={extraordinaryApe} alt="#" className={classes.apeImg} />
            </div>
          </div>
          <div className={classes.details}>
            <Heading base primary>
              Description
            </Heading>
            <div className={classes.keyValueContainer}>
              {details.map((el, i) => (
                <div className={classes.keyValue} key={i}>
                  <Text base secondary>
                    {el.key}
                  </Text>
                  <Text base primary>
                    {el.value}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.elipes}></div>
    </section>
  );
};

export default HeroSection;
