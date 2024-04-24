import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path = "/cart" Component={Cart}/>
          <Route path = "/" Component={Home}/>
        </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;
