import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Products from "./Pages/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
