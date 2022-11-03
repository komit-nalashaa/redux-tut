import React from "react";

function Home() {
  return (
    <div>
        <div className="add-to-cart"> 
        <img src="https://cdn-icons-png.flaticon.com/512/3523/3523885.png"/>

        </div>
        <h1> Home Component </h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://media.istockphoto.com/photos/two-appetizing-red-bell-peppers-and-two-green-juicy-spinach-leaves-on-picture-id1431939585?s=612x612" />
            </div>
            <div className="text-wrapper item">
                <span>Capsicum</span>
                <span>Price: $1000.00</span>
            </div>
            <div className="btn-wrapper item">
                <button> Add To Cart </button>
            </div>
        </div>
    </div>
  );
}

export default Home;
