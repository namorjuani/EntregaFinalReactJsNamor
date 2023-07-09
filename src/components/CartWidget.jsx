import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const [qty, setQty] = useState(0);
  const { count } = useContext(CartContext);
  useEffect(() => {
    setQty(count.qtyItems);
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/cart"
        style={{
          display: "flex",
          width: "35px",
          justifyContent: "space-between",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{qty}</span>
      </Link>
    </div>
  );
};

export default CartWidget;