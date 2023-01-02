import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductsList/ProductList";
import Header from "./components/Header/Header";
import { getTotalPrice, getSum } from './utills/cart/cart';


const tg = window.Telegram.WebApp;

const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const products = [
  {
    id: 1,
    title: "Puma",
    price: 100,
    imgUrl:
      "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2792101_krossovki_puma_383148_belyy_tekstil_.JPG",
  },
  {
    id: 2,
    title: "Nike",
    price: 200,
    imgUrl: "https://cdn1.ozone.ru/s3/multimedia-x/c1000/6378336381.jpg",
  },
  {
    id: 3,
    title: "Adidas",
    price: 500,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0361/6522/2533/products/66e1e6de45fe6a36e2f91e011b5a6980_300x.jpg?v=1669566090",
  },
  {
    id: 5,
    title: "Adidas",
    price: 1000,
    imgUrl:
      "https://trial-sport.ru/images/catalog/fx3624_sl_b2ccat_2151819.jpg",
  },
  {
    id: 6,
    title: "Puma",
    price: 2500,
    imgUrl:
      "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2618415_krossovki_puma_383232_belyy_kozha_natural_naya.JPG",
  },
  {
    id: 7,
    title: "Nike",
    price: 200,
    imgUrl:
      "https://cdn-hegcf.nitrocdn.com/rzlwUwqUzoBiQgyHeKTRmoGxxLXPnAoU/assets/static/optimized/rev-16060b1/wp-content/uploads/2022/03/krossovki-nike-air-max-720-black-e1625579133510-1-e1648135773675.jpg",
  },
  {
    id: 8,
    title: "Adidas",
    price: 5000,
    imgUrl:
      "https://krosboot.ru/2559-large_default/krossovki-adidas-adi-ease-kozhanye-belye.jpg",
  },
  {
    id: 9,
    title: "Adidas",
    price: 10000,
    imgUrl:
      "https://cdn-hegcf.nitrocdn.com/rzlwUwqUzoBiQgyHeKTRmoGxxLXPnAoU/assets/static/optimized/rev-16060b1/wp-content/uploads/2022/03/krossovki-adidas-yeezy-450-cloud-white-1-e1627153498408.jpg",
  },
];

function App() {
  const [cart, setCart] = useState(initialState);
  const countItems = cart.items;

  useEffect =
    (() => {
      tg.ready();
    },
    []);

  const onClose = () => {
    tg.close();
  };

  const onAddCartItem = (obj) => {
    const currentArr = !cart.items[obj.id]
      ? [obj]
      : [...cart.items[obj.id].orders, obj];

    const newItems = {
      ...cart.items,
      [obj.id]: {
        ...cart.orders,
        orders: currentArr,
        totalPrice: getTotalPrice(currentArr),
      },
    };

    const { totalPrice, allItems } = getSum(newItems);

    const newStateCart = {
      ...cart,
      items: newItems,
      totalCount: allItems.length,
      totalPrice,
    };
    setCart(newStateCart);
    
  };

  

  return (
    <div className="App">
      <Header cart={cart} />
      <ProductList onAddCartItem={onAddCartItem} countItems={countItems} products={products} />
    </div>
  );
}

export default App;
