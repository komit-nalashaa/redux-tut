import React from "react";

function Home(props) {
    console.warn("Home Propss+++++", props.data)
  return (
    <div>
        <div className="add-to-cart"> 
        <span className="cart-count"> {props.data.length}</span>
        <img src="https://cdn-icons-png.flaticon.com/512/3523/3523885.png" alt="not found"/>

        </div>
        <h1> Home Component </h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://media.istockphoto.com/photos/two-appetizing-red-bell-peppers-and-two-green-juicy-spinach-leaves-on-picture-id1431939585?s=612x612" alt="image is not loading"/>
            </div>
            <div className="text-wrapper item">
                <span>Capsicum</span>
                <span>Price: $1000.00</span>
            </div>
            <div className="btn-wrapper item">
                <button onClick={()=>{props.addToCartHandler({price: '299$', name: "Fruits"})}}> Add To Cart </button>
            </div>
        </div>
    </div>
  );
}

export default Home;
