import Button from "../Button/Button";
import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product-item">
      <img
        className="product-item__img"
        src="https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg"
        alt=""
      />
      <h2>Название товара</h2>
      <p className="product-item__price">Цена: 100</p>
      <Button />
    </div>
  );
}

export default ProductItem;
