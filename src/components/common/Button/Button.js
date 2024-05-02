import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";

const Button = ({
  children,

  onClick,
  link,
  surfaceSoft,
  surfaceMedium,
  secondary,
  wFull,
  className,
}) => {
  return (
    <>
      {onClick ? (
        <button
          className={clsx(
            className,
            classes.button,
            surfaceSoft && classes.surfaceSoft,
            surfaceMedium && classes.surfaceMedium,
            secondary && classes.secondary,
            wFull && classes.wFull
          )}
          onClick={onClick}
        >
          {children}
        </button>
      ) : link ? (
        <a
          className={clsx(
            className,
            classes.button,
            surfaceSoft && classes.surfaceSoft,
            surfaceMedium && classes.surfaceMedium,
            secondary && classes.secondary,
            wFull && classes.wFull
          )}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <button
          className={clsx(
            className,
            classes.button,
            surfaceSoft && classes.surfaceSoft,
            surfaceMedium && classes.surfaceMedium,
            secondary && classes.secondary,
            wFull && classes.wFull
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
