import Layout from "./lab2/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./lab2/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="shop" element={<h1>Shop</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
