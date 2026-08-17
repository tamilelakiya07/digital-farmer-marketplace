import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://backend:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>🌾 Digital Farmer Marketplace</h1>
          <p>Direct connection between farmers and buyers</p>
        </div>

        <button className="login-btn">Login</button>
      </header>

      <main>
        <section className="hero">
          <h2>Fresh Agricultural Products</h2>
          <p>
            Discover fresh products directly from local farmers.
          </p>
        </section>

        <section className="products-section">
          <h2>Available Products</h2>

          {loading ? (
            <p>Loading products...</p>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-icon">🌱</div>

                  <h3>{product.name}</h3>

                  <p>
                    ₹{product.price} / {product.unit}
                  </p>

                  <button>View Product</button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;