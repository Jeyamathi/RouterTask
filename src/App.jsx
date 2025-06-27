import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import ItemDetails from './pages/ItemDetails';
import Cart from './pages/Cart';
import ProductList from './component/ProductList';
import FloatingCartButton from './component/FloatingCartButton';

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}


function MainApp() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

 const updateQuantity = (productId, delta) => {
  console.log
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  console.log(cartItems);
  };

  const navigate = useNavigate();

  return (
    <>
     <FloatingCartButton/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={ <ProductList
          cartItems={cartItems}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />}/>
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/cart" element={<Cart  cartItems={cartItems} onUpdateQuantity={updateQuantity} onRemove={handleRemoveFromCart}/>} />
      </Routes>
    </>
  );
}

export default App;
