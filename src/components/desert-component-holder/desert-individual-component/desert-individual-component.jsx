import "./desert-individual-component.css";

function DesertIndividualComponent(props) {
  return (
    <div className="desert-individual-component">
      <div className="top">
        {props.desertImage}
        <button className="add-to-cart">
          <div className="shopping-icon">
            <img src="../../../../public/images/icon-add-to-cart.svg" alt="" />
          </div>
          <div className="text">Add to Cart</div>
        </button>
        
        <button className="adjust-quantity-button">
          <div className="minus-icon">
            <img src="../../../../public/images/icon-decrement-quantity.svg" alt="" />
          </div>{" "}
          <div className="text">1</div>
          <div className="plus-icon">
            <img src="../../../../public/images/icon-increment-quantity.svg" alt="" />
          </div>
        </button>
      </div>

      <div className="bottom">
        <div className="desert-type">{props.desertType}</div>
        <div className="desert-name">{props.desertName}</div>
        <div className="desert-price">{`$${props.desertPrice.toFixed(2)}`}</div>
      </div>
    </div>
  );
}

export default DesertIndividualComponent;
