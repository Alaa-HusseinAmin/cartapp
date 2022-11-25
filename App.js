import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './Componants/AppNavbar'
import Products from './Componants/Products';
import Cart from './Componants/Cart';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
