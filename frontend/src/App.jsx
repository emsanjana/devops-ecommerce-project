import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h1>DevOps E-Commerce Project</h1>

      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
