import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartProvider} from './contexts/CartContext';
import Home from './routes/Home/Home';
import ItemListContainerId from './routes/ItemListContainerId/ItemListContainerId';
import ItemDetailContainerId from './routes/ItemDetailContainerId/ItemDetailContainerId';
import Cart from './routes/Cart/Cart';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<ItemListContainerId />} />
        <Route exact path="/item/:id" element={<ItemDetailContainerId />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;