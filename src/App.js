import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import MyProfile from './components/profile/MyProfile';
import OrderHistory from './components/orderhistory/OrderHistory';
import Productinfo from './components/product_details/Productinfo'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react';
import CartItem from './components/cart/CartItem';
import Shop from './components/shop/Shop';
import AllCategory from './components/ItemsByCategory/AllCategory';
import Categories from './components/ItemsByCategory/seperateCategory/Categories';
import SearchPage from './components/search/SearchPage';
import PrivateRoutes from './routes/PrivateRoutes';
function App() {
  const [states, setState] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
      <div className='top'>
        <Header states={states} change={setState} />
        <Navbar/>
      </div>
        <Routes>
          {/* <Route path='/'> */}
            <Route index element={<Home />} />
            <Route path='signin' element={<SignIn changestate={data => setState(data)} />} />
            <Route path='signup' element={<SignUp />} />
            <Route element = { <PrivateRoutes auth={!states} />}>
            <Route path='cart' element={<CartItem />} />
            <Route path='myprofile' element={<MyProfile />} />
            <Route path='orderhistory' element={<OrderHistory />} />
            <Route path="productDetails/:value" element={<Productinfo states={states} />} />
            <Route path='shop' element={<Shop />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="categories">
              <Route index element={<AllCategory />} />
              <Route path="laptops" element={<Categories categoryName="laptop" />} />
              <Route path="phones" element={<Categories categoryName="phone" />} />
              <Route path="camera" element={<Categories categoryName="camera" />} />
              <Route path="accessories" element={<Categories categoryName="accessories" />} />
              <Route path="watch" element={<Categories categoryName="watch" />} />
            </Route>
            </Route>
          {/* </Route> */}
        </Routes>
        <Routes/>
        <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
