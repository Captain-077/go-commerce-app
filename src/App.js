import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import Home from "./components/Home"
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path = "/cart" Component={Cart}/>
          <Route path = "/" Component={Home}/>
          <Route path = "*" Component={NotFound}/>
        </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;
