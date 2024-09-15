import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ cartTotal }) => {
  return (
    <div className="row">
      <div>
        <h1 className="text-left" style={{ margin: "5px" }}>
          Shop to React
        </h1>
        <span>
          <FontAwesomeIcon icon={faShoppingCart} className="right" />
        </span>
        <span>{cartTotal > 0 ? cartTotal : "0"} items</span>
      </div>
    </div>
  );
};

export default Navbar;