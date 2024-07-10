import './App.css';
import React from 'react';
import NAV from './nav';
import Home from './components/Home';
import Contact from './components/contact';
import Blogs from './components/Blogs';
import Login from './components/login';
import Signup from './components/Signup';
import Productsview from './components/productsview';
import Addtocart from './components/addtocart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="App" >
      <BrowserRouter>
        <NAV />
        <Routes >
          <Route path="/" element={< Home />} />
          < Route path="blogs" element={< Blogs />} />
          < Route path="contact" element={< Contact />} />
          < Route path="login" element={< Login />} />
          < Route path="Login/Signup" element={< Signup />} />
          < Route path="productsview" element={< Productsview />} />
          < Route path="addtocart" element={< Addtocart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;