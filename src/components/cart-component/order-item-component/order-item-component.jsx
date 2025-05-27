import './order-item-component.css'
function OrderItemComponent() {
  return (
    <div className="item-holder">
        <div className="order-item-selected">
      <div className="item-name">Classic Tiramisu</div>
      <div className="item-information">
        <div className="item-quantity">1x</div>
        <div className="item-price-before-calculation">5.50</div>
        <div className="item-price-after-calculation">5.50</div>
      </div>
    </div>

    <div className="remove-order">
        <img src="../../../../public/images/icon-remove-item.svg" alt="" />
    </div>
    </div>

    
  );
}
export default OrderItemComponent