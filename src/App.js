import "./App.css";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation.js";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [articlesToLoad, setArticlesToLoad] = useState(6);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products?limit=" + articlesToLoad);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, [articlesToLoad]);

  function addToBasket(product) {
    console.log(product);
    setBasket(function (oldBasket) {
      return oldBasket.concat({ productdisplayname: product.productdisplayname, price: product.price, id: product.id });
    });
  }

  function addProduct() {
    console.log("hello");
    setProducts((oldProducts) => oldProducts.concat({ productdisplayname: "Rikke", price: "12", articletype: "t-shirt", brand: "hummel" }));
  }

  const productsCopy = [...products];
  productsCopy.sort((a, b) => {
    if (a.productdisplayname.toLocaleLowerCase() > b.productdisplayname.toLocaleLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div>
      <Navigation />
      <button onClick={addProduct}>Add Product</button>
      <button onClick={addToBasket}>Add to Basket</button>
      <button onClick={() => setArticlesToLoad(10)}>load 10</button>
      <button onClick={() => setArticlesToLoad(50)}>load 50</button>
      <main>
        <ProductList addToBasket={addToBasket} products={productsCopy} />
        <Basket basket={basket} />
      </main>
    </div>
  );
}

export default App;
