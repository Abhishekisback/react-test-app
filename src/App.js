import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (res?.status === 200) {
          setProducts(res.data ?? []);
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app-container">
      <h1 className="page-title">Products</h1>

      <div className="product-grid">
        {products.map((ele) => (
          <div className="product-card" key={ele.id}>
            <div className="image-wrapper">
              <img src={ele.image} alt={ele.title} />
            </div>

            <div className="product-info">
              <p className="product-title">{ele.title}</p>
              <p className="product-price">₹ {ele.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
