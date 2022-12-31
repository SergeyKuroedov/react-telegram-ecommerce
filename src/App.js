import { useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductsList/ProductList";

const tg = window.Telegram.WebApp;

const products = [
  {
    id: 1,
    title: "Puma",
    price: "100",
    imgUrl:
      "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2792101_krossovki_puma_383148_belyy_tekstil_.JPG",
  },
  {
    id: 2,
    title: "Puma",
    price: "100",
    imgUrl:
      "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2792101_krossovki_puma_383148_belyy_tekstil_.JPG",
  },
  {
    id: 3,
    title: "Puma",
    price: "100",
    imgUrl:
      "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2792101_krossovki_puma_383148_belyy_tekstil_.JPG",
  },
  {
    id: 4,
    title: "Puma",
    price: "100",
    imgUrl:
      "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2792101_krossovki_puma_383148_belyy_tekstil_.JPG",
  },
];

function App() {
  useEffect =
    (() => {
      tg.ready();
    },
    []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
