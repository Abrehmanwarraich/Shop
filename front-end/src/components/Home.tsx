import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link
                to="productsview"
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce2"
                  className="object-cover object-center w-full h-full block"
                  src="../../../images/a.jpg"
                />
              </Link>
              <Link to="productsview">
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                href="www.google.com"
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce3"
                  className="object-cover object-center w-full h-full block"
                  src="../../../images/a.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                href="www.google.com"
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce4"
                  className="object-cover object-center w-full h-full block"
                  src="../../../images/a.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                href="www.google.com"
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce6"
                  className="object-cover object-center w-full h-full block"
                  src="h../../../images/a.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                href="www.google.com"
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce7"
                  className="object-cover object-center w-full h-full block"
                  src="../../../images/a.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                href="www.google.com"
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce8"
                  className="object-cover object-center w-full h-full block"
                  src="../../../images/a.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                href="www.google.com"
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce11"
                  className="object-cover object-center w-full h-full block"
                  src="../../../images/a.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                href="www.google.com"
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce21"
                  className="object-cover object-center w-full h-full block"
                  src="../../../images/a.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
