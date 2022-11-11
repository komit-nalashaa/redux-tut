import React from "react";

function Header(props) {
    console.warn("Header Propss+++++", props.data)
  return (
    <div>
        <div className="add-to-cart"> 
            <span className="cart-count"> {props.data.length}</span>
            <img src="https://cdn-icons-png.flaticon.com/512/3523/3523885.png" alt="not found"/>
        </div>
    </div>
  );
}

export default Header;
