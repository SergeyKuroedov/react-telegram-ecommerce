import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

function ProductList({ products, onAddCartItem, countItems }) {
  console.log(countItems);
  return (
    <div className="container">
      <div className="container__items">
        {products &&
          products.map((obj) => (
            <ProductItem
              onAddCartItem={onAddCartItem}
              key={`${obj.title}__${obj.id}`}
              obj={obj}
              count={countItems[obj.id] && countItems[obj.id].orders.length}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
