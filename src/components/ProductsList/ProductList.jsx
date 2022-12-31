import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css'

function ProductList() {
    return ( 
        <div className="container">
            <div className="container__items">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
     );
}

export default ProductList;