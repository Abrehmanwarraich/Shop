import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  file?: string; // Optional field for the product image
}

interface CartItem {
  productId: string;
  quantity: number;
}

const AddToCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const fetchProducts = async () => {
      if (cartItems.length === 0) return; // No items in cart, no products to fetch

      const productIds = cartItems.map((item) => item.productId);

      try {
        const responses = await Promise.all(
          productIds.map((id) => axios.get<Product>(`http://localhost:3001/products/${id}`))
        );

        const fetchedProducts = responses.map((response) => response.data);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [cartItems]);

  // if (products.length === 0) {
  //   return <div>First add some products...</div>; // Show loading indicator while fetching data
  // }

  // Calculate subtotal
  const subtotal = products.reduce((acc, product) => acc + product.price, 0);
  const shipping = 8.00; // Assuming fixed shipping cost
  const total = subtotal + shipping;

  return (
    <>
      <section className="h-screen bg-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>
          <div className="mx-auto mt-6 max-w-md md:mt-6">
            <div className="rounded-3xl bg-white shadow-lg">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  {products.map((product) => (
                    <ul key={product._id} className="-my-8">
                      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div className="shrink-0 relative">
                          <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                          <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={`http://localhost:3001/${product.file}`} alt="" />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">{product.name}</p>
                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{product.category}</p>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${product.price.toFixed(2)}</p>
                            </div>
                          </div>

                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>

                <div className="mt-6 space-y-3 border-t border-b py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">${shipping.toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">${total.toFixed(2)}</p>
                </div>

                <div className="mt-6 text-center">
                  <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Place Order
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToCart;
