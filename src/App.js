import NavBar from "./components/navBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import AboutUs from "./components/aboutUs";
import CheckOut from "./components/checkOut";
import NotFound from "./components/notFound";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
};
export default App;
