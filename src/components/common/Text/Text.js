import React from "react";
import classes from "./Text.module.css";

import clsx from "clsx";
const Text = ({
  children,
  xs,
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
    <p
      className={clsx(
        classes.text,
        primary && classes.primary,
        secondary && classes.secondary,
        xs && classes.xs,
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
    </p>
  );
};

export default Text;
