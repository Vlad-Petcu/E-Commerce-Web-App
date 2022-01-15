import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const SignInWrapper = ({ children, currentUser }) => {
    return currentUser ? <Navigate to="/" replace /> : children;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route
          path='/login'
          element={<SignInWrapper currentUser={user}>
            <Login />
          </SignInWrapper>}
        />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;
