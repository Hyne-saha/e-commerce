import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style.css';
// import App from './App';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import Footer from './Components/footer';
import ProductDetails from './Components/ProductDetails';
import { CheckOutPg } from './Components/CheckOutPg';
import { Cart } from './Components/Cart';
import Contact from './Components/Contact';
// import Login from './Components/Login';
import Orders from './Components/Orders';
import OrderDetails from './Components/OrderDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <BrowserRouter>
    <Provider store={store}> 
    <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ProductList' element={<ProductList></ProductList>}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/CheckOutPg/:id' element={<CheckOutPg></CheckOutPg>}></Route>
        <Route path='/CheckOutPg'element={<CheckOutPg></CheckOutPg>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Orders' element = {<Orders></Orders>}></Route>
        <Route path='/OrderDetails/:id' element ={<OrderDetails></OrderDetails>}></Route>
        {/* <Route path='/Login' element={<Login></Login>}></Route> */}
      </Routes>
      </Provider>  
    </BrowserRouter>
    
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
