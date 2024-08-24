import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Shopcontext from "./context/Shopcontext";

function App() {
  return (
    <div className="App">
      <Shopcontext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Shopcontext>
    </div>
  );
}

export default App;
 