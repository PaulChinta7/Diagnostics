
import './App.css';
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import Cart from './pages/Cart';
import NavBar from './components/NavBar'
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import BundleCatalog from './pages/BundleCatalog';
import Account from './pages/Account';
import Orders from './pages/Orders';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/products" element={<ProductCatalog/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/bundles" element={<BundleCatalog/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="*" element={<ErrorPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
