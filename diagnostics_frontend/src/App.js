
import './App.css';
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import Cart from './pages/Cart';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavBar/>
     <BrowserRouter>
     <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/products" element={<ProductCatalog/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
