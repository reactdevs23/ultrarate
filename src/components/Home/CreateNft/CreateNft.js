import React from "react";
import classes from "./CreateNft.module.css";
import clsx from "clsx";
import { Button, Heading, Text } from "../../common";
import { FiArrowRight } from "react-icons/fi";

import { createNft } from "../../../images";

const CreateNft = () => {
  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container)}>
        <div className={classes.infoContainer}>
          <Heading large primary className={classes.title}>
            Create your own NFT
          </Heading>
          <Text xsMedium secondary className={classes.tagline}>
            Explore new trending NFTs
          </Text>
          {/* if you want you can pass link="#" */}
          <Button onClick={() => {}} className={classes.button}>
            Get started <FiArrowRight />
          </Button>
        </div>{" "}
        <div className={classes.apeContainer}>
          <img src={createNft} alt="#" className={classes.img} />
        </div>
      </div>
    </section>
  );
};

export default CreateNft;
