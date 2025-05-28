import "./cart-component.css";
import OrderItemComponent from "./order-item-component/order-item-component.jsx";
import { useState } from "react";
function CartComponent(props) {
  const [clicked, setClicked] = useState(false);
  // Condition: at least one item in cart
  const hasItems = props.cartItems.length > 0;

  // Inline styles to toggle visibility
  const showStyle = { display: hasItems ? "flex" : "none" };
  const showButton = { display: hasItems ? "block" : "none" };

  // Compute order total dynamically
  // Compute overall total from all cart items
  const total = props.cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  //TO toggle cofirmation container
  const showOrderContainer = { display: clicked == true ? "flex" : "none" };
const showOverlay = {display: clicked == true ? "block" :"none"};
  return (
    <div className="cart-container">
      <div className="your-cart-title">
        Your Cart ({props.cartItems.length})
      </div>

      {props.cartItems.length === 0 ? (
        <>
          <div className="cart-image">
            <img
              src="../../public/images/illustration-empty-cart.svg"
              alt="Empty cart"
            />
          </div>
          <div className="cart-paragraph">
            Your added items will appear here
          </div>
        </>
      ) : (
        props.cartItems.map((item, index) => (
          <OrderItemComponent
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            showRemoveIcon={true} // show remove icon normally
          />
        ))
      )}

      {/* Order Total – only show when cart not empty */}
      <div className="order-total" style={showStyle}>
        <div className="order-total-title">Order Total</div>
        <div className="order-total-price">${total}</div>
      </div>

      {/* Carbon Delivery info – only show when cart not empty */}
      <div className="carbon-delivery-container" style={showStyle}>
        <div className="carbon-delivery-img">
          <img
            src="../../../public/images/icon-carbon-neutral.svg"
            alt="Carbon neutral delivery"
          />
        </div>
        <div className="carbon-delivery-message">
          This is a <span>carbon-neutral</span> delivery
        </div>
      </div>

      {/* Confirm Order button – only show when cart not empty */}
      <button
        className="confirm-order"
        style={showButton}
        onClick={() => setClicked(true)}
      >
        Confirm Order
      </button>

      {/*Order Confirmed Container*/}
      <div className="order-confirmed-container" style={showOrderContainer}>
        <div className="checkmark">
          <img src="../../../public/images/icon-order-confirmed.svg" alt="" />
        </div>
        <div className="order-confirmed-title">Order Confirmed</div>
        <div className="enjoy-your-food">We hope you enjoy your food!</div>

        <div className="dessert-items-order">
          {props.cartItems.map((item, index) => (
            <OrderItemComponent
              key={index}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              showRemoveIcon={false} // hide remove image here
            />
          ))}
        </div>

        {/* Order Total – only show when cart not empty */}
        <div className="order-total" style={showStyle}>
          <div className="order-total-title">Order Total</div>
          <div className="order-total-price">${total}</div>
        </div>

        {/* Start New Order button – only show when cart not empty */}
        <button className="start-new-order" style={showButton} onClick={() => window.location.reload()}>
          Start New Order
        </button>
      </div>
      <div className="overlay" style={showOverlay}></div>
    </div>
  );
}

export default CartComponent;
