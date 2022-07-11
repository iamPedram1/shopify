import NavBar from "./components/navBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import AboutUs from "./components/aboutUs";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
