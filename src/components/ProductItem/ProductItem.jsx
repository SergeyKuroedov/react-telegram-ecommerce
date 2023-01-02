import Button from "../Button/Button";
import "./ProductItem.css";
import ButtonsAdd from "../Button/ButtonsAdd";

function ProductItem({ obj, onAddCartItem, count }) {
  const onAdd = () => {
    onAddCartItem(obj);
  };

  return (
    <div className="product-item">
      <img className="product-item__img" src={obj.imgUrl} alt={obj.title} />
      <h2 className="product-item__title">{obj.title}</h2>
      <p className="product-item__price">Цена: {obj.price} $</p>
      {count && count ?(
        <ButtonsAdd />
      ) : (
        <Button className={"product-item__button"} onAdd={onAdd}>
          Добавить
        </Button>
      )}
    </div>
  );
}

export default ProductItem;
