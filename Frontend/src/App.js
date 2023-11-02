import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Dashboard from "./pages/Dashboard/dashboard";
import NotFound from "./pages/Not Found/NotFound";
import SingleProduct from "./components/Product/SingleProduct";
import Layout from "./layouts/Layout";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="/services/singleProduct" element={<SingleProduct />} />
        <Route
          path="/DashTah"
          element={<Dashboard  />}
        />
        <Route
          path="/*"
          element={<NotFound  />}
        />
      </Routes>
    </div>
  );
}

export default App;
