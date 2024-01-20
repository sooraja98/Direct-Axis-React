import {Routes,Route } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './page/Main';
import Register from './components/register/Register';
import CartPage from './page/CartPage'
import ProfilePage from './page/ProfilePage'

function App() {
  return (
    <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/cart' element={<CartPage/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/main' element={<Main/>}></Route>
       <Route path='/profile' element={<ProfilePage/>}></Route>
    </Routes>
  );
}

export default App;
