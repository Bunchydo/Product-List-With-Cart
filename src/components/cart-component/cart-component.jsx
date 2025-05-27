import "./cart-component.css";
import OrderItemComponent from "./order-item-component/order-item-component.jsx";

function CartComponent(props) {
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
          />
        ))
      )}

      {/* Order Total – only show when cart not empty */}
      <div className="order-total" style={showStyle}>
        <div className="order-total-title">Order Total</div>
        <div className="order-total-price">${total}</div>
      </div>

      {/* Carbon Delivery info – only show when cart not empty */}
      <div
        className="carbon-delivery-container"
        style={showStyle}
      >
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
      >
        Confirm Order
      </button>
    </div>
  );
}

export default CartComponent;
