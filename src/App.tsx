import {Routes,Route } from 'react-router-dom';
import "./App.css";
import Login from './components/login/Login';
import Main from './page/Main';
import Register from './components/register/Register';
import CartPage from './page/CartPage'

function App() {
  return (
    <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/cart' element={<CartPage/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/main' element={<Main/>}></Route>
    </Routes>
  );
}

export default App;
