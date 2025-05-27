import "./cart-component.css";
import OrderItemComponent from "./order-item-component/order-item-component.jsx";
function CartComponent() {
  return (
    <div className="cart-container">
      <div className="your-cart-title">Your Cart (0)</div>
      <div className="cart-image">
        <img src="../../public/images/illustration-empty-cart.svg" alt="" />
      </div>
      <div className="cart-paragraph">Your added items will appear here</div>
     <OrderItemComponent></OrderItemComponent>

      <div className="order-total">
        <div className="order-total-title">Order Total</div>{" "}
        <div className="order-total-price">$46.50</div>
      </div>
      <div className="carbon-delivery-container">
        <div className="carbon-delivery-img"><img src="../../../public/images/icon-carbon-neutral.svg" alt="" /></div>{" "}
        <div className="carbon-delivery-message">This is a <span>carbon-neutral</span> delivery</div>
      </div>
    <button className="confirm-order">Confirm Order</button>
    </div>
  );
}
export default CartComponent;
