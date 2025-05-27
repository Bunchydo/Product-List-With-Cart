import "./desert-individual-component.css";
import { useState } from "react";

function DesertIndividualComponent(props) {
  const [clicked, setClicked] = useState(false);
  const [amount, setAmount] = useState(1);

  const updateCart = (newAmount) => {
    props.onAddToCart({
      name: props.desertName,
      price: props.desertPrice,
      quantity: newAmount,
    });
  };

  const incrementQuantity = () => {
    setAmount((prev) => {
      const newAmount = prev + 1;
      updateCart(newAmount);
      return newAmount;
    });
  };

  const decrementQuantity = () => {
    setAmount((prev) => {
      const newAmount = prev - 1;
      if (newAmount < 0) return 0; // Prevent negative quantities
      props.onAddToCart({
        name: props.desertName,
        price: props.desertPrice,
        quantity: newAmount,
      });
      if (newAmount === 0) setClicked(false); // Show "Add to Cart" button again
      return newAmount;
    });
  };

  const handleAdd = () => {
    setAmount(1); // reset amount to 1 explicitly

    updateCart(1);
    setClicked(true);
  };

  return (
    <div className="desert-individual-component">
      <div className="top">
        <div
          style={{
          
            border:clicked ? "3px solid #d8624e": "none",
            borderRadius:clicked ? "10px" : "none"
          }}
        >
          {props.desertImage}
        </div>

        {/* Add to cart button */}
        <button
          className="add-to-cart"
          style={{ display: clicked ? "none" : "flex" }}
          onClick={handleAdd}
        >
          <div className="shopping-icon">
            <img src="../../../../public/images/icon-add-to-cart.svg" alt="" />
          </div>
          <div className="text">Add to Cart</div>
        </button>

        {/* Quantity adjustment button */}
        <button
          className="adjust-quantity-button"
          style={{
            display: clicked ? "flex" : "none",
            border: "1px solid red",
          }}
        >
          <div className="minus-icon" onClick={decrementQuantity}>
            <img
              src="../../../../public/images/icon-decrement-quantity.svg"
              alt=""
            />
          </div>
          <div className="text">{amount}</div>
          <div className="plus-icon" onClick={incrementQuantity}>
            <img
              src="../../../../public/images/icon-increment-quantity.svg"
              alt=""
            />
          </div>
        </button>
      </div>

      <div className="bottom">
        <div className="desert-type">{props.desertType}</div>
        <div className="desert-name">{props.desertName}</div>
        <div className="desert-price">${props.desertPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default DesertIndividualComponent;
