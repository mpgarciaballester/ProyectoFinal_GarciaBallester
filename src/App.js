import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import ItemListContainerId from './routes/ItemListContainerId/ItemListContainerId';
import ItemDetail from './routes/ItemDetailContainer/ItemDetailContainer';
import Cart from './routes/Cart/Cart';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<ItemListContainerId />} />
        <Route exact path="/item/:id" element={<ItemDetail />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;