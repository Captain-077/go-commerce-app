import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/ReactToastify.css';
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import Home from "./components/Home"
import NotFound from './components/NotFound';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
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
