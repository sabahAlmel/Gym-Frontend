import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/Not Found/NotFound";
import SingleProduct from "./components/Product/SingleProduct";
import Layout from "./layouts/Layout";
import PersonnalTrainingDash from "./layouts/PersonnalTraining/PersonnalTrainingDash";
import Regimedash from "./layouts/regimedash/regimedash";
import DashProductsLayout from "./pages/Dashboard/DashProductsLayout/DashProductsLayout";
import DashGymPlanLayout from "./pages/Dashboard/DashGymPlan/DashGymPlanLayout";

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
        <Route path="/Dash" element={<Dashboard />}>
          <Route
            path="dashServices"
            element={
              <>
                <PersonnalTrainingDash isOnDashboard />
                <Regimedash isOnDashboard />
              </>
            }
          />
          <Route
            path="dashProducts"
            element={<DashProductsLayout isOnDashboard />}
          />
          <Route path="dashGymPlans" element={<DashGymPlanLayout />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
