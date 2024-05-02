import React from "react";
import classes from "./Heading.module.css";

import clsx from "clsx";
const Heading = ({
  children,
  base,
  medium,
  xsMedium,
  large,
  semiBold,
  primary,
  secondary,
  className,
}) => {
  return (
    <h3
      className={clsx(
        classes.heading,
        primary && classes.primary,
        secondary && classes.secondary,
        base && classes.base,
        medium && classes.medium,
        xsMedium && classes.xsMedium,
        large && classes.large,
        semiBold && classes.semiBold,
        secondary && classes.secondary,
        className
      )}
    >
      {children}
    </h3>
  );
};

export default Heading;
