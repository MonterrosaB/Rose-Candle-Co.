import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./global/components/Nav.jsx"; // Menu
import Footer from "./global/components/Footer.jsx"; // Footer
import Faqs from "../src/pages/Faqs/Faqs.jsx"; // Pagina de preguntas frecuentes
import Products from "../src/pages/Products/Products.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
