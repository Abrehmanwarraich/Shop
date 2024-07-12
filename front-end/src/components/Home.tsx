import React, { useEffect, useState } from 'react';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from 'axios';

// Define Product Type
interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  file?: string; // Optional field for product image
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async () => {
    try {
      const response = await axios.get<Product[]>('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      setError('Error fetching products');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  to={`/productsview/${product._id}`}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt={product.name}
                    className="object-cover object-center w-full h-full block"
                    src={`http://localhost:3001/${product.file}`} // Use product image or fallback image
                  />
                </Link>
                <Link to={`/productsview/${product._id}`}>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.name}
                    </h2>
                    <p className="mt-1">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
