
import './App.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import {Footer} from "./components/footer";


function App() {
  return (
    <div className="App">
           <Router>
            <Navbar/>
            <Routes>
            <Route path="/cart" element={<Cart/>} /> 
              <Route path="/" element={<Shop/>} /> 
            </Routes>
            <Footer/>
           </Router>
    </div>
  );
}

export default App;
