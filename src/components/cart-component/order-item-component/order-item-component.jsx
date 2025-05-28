import "./order-item-component.css";

function OrderItemComponent(props) {
  // Ensure both values are numbers
  const unitPrice = parseFloat(props.price);
  const quantity = parseInt(props.quantity);

  const total = (unitPrice * quantity).toFixed(2);

  return (
    <div className="item-holder">
      <div className="order-item-selected">
        <div className="item-name">{props.name}</div>
        <div className="item-information">
          <div className="item-quantity">{quantity}</div>
          <div className="item-price-before-calculation">
            ${unitPrice.toFixed(2)}
          </div>
          <div className="item-price-after-calculation">${total}</div>
        </div>
      </div>

      {props.showRemoveIcon && (
        <div className="remove-order">
          <img src="/images/icon-remove-item.svg" alt="" />
        </div>
      )}
    </div>
  );
}

export default OrderItemComponent;
