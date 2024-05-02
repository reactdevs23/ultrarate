import React, { useState } from "react";
import classes from "./Checkout.module.css";
import { IoMdClose } from "react-icons/io";
import { Button, Text } from "../common";
import { ethereum, item1, item2 } from "../../images";
import clsx from "clsx";
const Checkout = ({ setCheckout }) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [feePercentage] = useState(5);
  const [items, setItems] = useState([
    {
      id: 1,
      img: item1,
      name: "Space Executor",
      price: 0.005,
      currency: "ETH",
    },
    { id: 2, img: item2, name: "Butterdead", price: 0.005, currency: "ETH" },
    {
      id: 3,
      img: item1,
      name: "Space Executor",
      price: 0.005,
      currency: "ETH",
    },
    { id: 4, img: item2, name: "Butterdead", price: 0.005, currency: "ETH" },
  ]);

  const totalItemPrice = items.reduce((acc, item) => acc + item.price, 0);
  const feeAmount = (totalItemPrice * feePercentage) / 100;
  const totalPrice = totalItemPrice + feeAmount;

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);

    setItems(updatedItems);

    setSelectedItem(null);
  };

  return (
    <div className={clsx(classes.wrapper)}>
      <div className={clsx(classes.container, "overflow")}>
        {" "}
        <div className={classes.header}>
          <div className={classes.chekout}>
            <h3 className={classes.title}>Checkout</h3>
            <h4 className={classes.numberOfItems}>32</h4>
          </div>
          <Button
            onClick={() => setCheckout(false)}
            surfaceSoft
            className={classes.close}
          >
            <IoMdClose />
          </Button>
        </div>
        <div className={clsx(classes.items, "overflow")}>
          {items.map((el, i) => (
            <div
              className={clsx(
                classes.item,
                selectedItem === el.id && classes.selected
              )}
              key={i}
              onClick={() => {
                setSelectedItem(el.id);
              }}
            >
              {selectedItem === el.id && (
                <div
                  className={classes.deleteItem}
                  onClick={() => deleteItem(selectedItem)}
                >
                  <IoMdClose className={classes.deleteIcon} />
                </div>
              )}
              <img src={el.img} alt="#" className={classes.img} />
              <div className={classes.itemInfo}>
                {" "}
                <Text base primary className={classes.itemName}>
                  Space Executor
                </Text>
                <Text primary base semiBold className={classes.price}>
                  {el.price}
                  <span className={classes.currency}>{el.currency}</span>
                </Text>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.bitCoin}>
          <img src={ethereum} alt="#" className={classes.bitCoinLogo} />
          <div className={classes.coinInfo}>
            <p className={classes.key}>ETH9032523</p>
            <p className={classes.name}>Ethereum</p>
          </div>
        </div>
        <div className={classes.priceInfo}>
          <div className={classes.list}>
            <p className={classes.label}>Price</p>
            <p className={classes.amount}>
              {totalItemPrice} <span>ETH</span>
            </p>
          </div>
          <div className={clsx(classes.list, classes.fee)}>
            <p className={classes.label}>Fee</p>
            <p className={classes.amount}>
              {feePercentage} <span>%</span>
            </p>
          </div>{" "}
          <div className={clsx(classes.total, classes.list)}>
            <p className={classes.label}>Total price</p>
            <p className={classes.amount}>
              {totalPrice} <span>ETH</span>
            </p>
          </div>
          <Button onClick={() => {}} wFull>
            Pay now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
