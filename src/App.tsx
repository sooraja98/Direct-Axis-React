import {Routes,Route } from 'react-router-dom';
import "./App.css";
import Login from './components/login/Login';
import ProductListing from './components/Productlisting/ProductListing';

function App() {
  return (
    <Routes>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/pro' element={<ProductListing/>}></Route>
    </Routes>
  );
}

export default App;
