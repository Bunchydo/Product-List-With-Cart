import DesertIndivdualComponent from "./desert-individual-component/desert-individual-component";
import "./desert-component-holder.css";

function DesertComponentHolder(props) {
  return (
    <div className="left-side">
      <div className="desert-word-title">Desserts</div>
      <div className="desert-grid">
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-waffle-desktop.jpg"
              alt="Waffle with Berries"
            />
          }
          desertType="Waffle"
          desertName="Waffle with Berries"
          desertPrice={6.5}
          onAddToCart={props.onAddToCart}
        />
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-creme-brulee-desktop.jpg"
              alt="Creme Brulee"
            />
          }
          desertType="Crème Brûlée"
          desertName="Vanilla Bean Crème Brûlée"
          desertPrice={7.0}
          onAddToCart={props.onAddToCart}
        />
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-macaron-desktop.jpg"
              alt="Macaron"
            />
          }
          desertType="Macaron"
          desertName="Macaron Mix of Five"
          desertPrice={8.0}
          onAddToCart={props.onAddToCart}
        />{" "}
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-tiramisu-desktop.jpg"
              alt="Tiramisu"
            />
          }
          desertType="Tiramisu"
          desertName="Classic Tiramisu"
          desertPrice={5.5}
          onAddToCart={props.onAddToCart}
        />{" "}
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-baklava-desktop.jpg"
              alt="Baklava"
            />
          }
          desertType="Baklava"
          desertName="Pistachio Baklava"
          desertPrice={4.0}
          onAddToCart={props.onAddToCart}
        />{" "}
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-meringue-desktop.jpg"
              alt="Lemon Meringue Pie"
            />
          }
          desertType="Pie"
          desertName="Lemon Meringue Pie"
          desertPrice={5.0}
          onAddToCart={props.onAddToCart}
        />{" "}
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-cake-desktop.jpg"
              alt="Red Velvet Cake"
            />
          }
          desertType="Cake"
          desertName="Red Velvet Cake"
          desertPrice={4.5}
          onAddToCart={props.onAddToCart}
        />{" "}
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-brownie-desktop.jpg"
              alt="Brownie"
            />
          }
          desertType="Brownie"
          desertName="Salted Caramel Brownie"
          desertPrice={5.5}
          onAddToCart={props.onAddToCart}
        />{" "}
        <DesertIndivdualComponent
          desertImage={
            <img
              src="/images/image-panna-cotta-desktop.jpg"
              alt="Panna Cotta"
            />
          }
          desertType="Panna Cotta"
          desertName="Vanilla Panna Cotta"
          desertPrice={6.5}
          
          onAddToCart={props.onAddToCart}
        />
      </div>
    </div>
  );
}

export default DesertComponentHolder;
