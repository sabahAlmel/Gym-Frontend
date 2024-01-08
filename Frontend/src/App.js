import { Route, Routes, useNavigate } from "react-router-dom";
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
import Signup from "./components/authForm/Signup";
import Login from "./components/authForm/Login";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext/userContext";
import { fetchUser } from "./db/authData";
import ProtectedRoute from "./components/protectedRoutes";
import Forbidden from "./pages/403/Forbidden";
import { HelmetProvider } from "react-helmet-async";
import GymPlan from "./layouts/gymPlanDashboard/GymPlan";
import ProductsDash from "./layouts/productDashboard/ProductDash";

import { ToastContainer } from "react-toastify";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  async function getUser() {
    try {
      const res = await fetchUser();
      if (res) {
        console.log(res);
        setUser(res);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    } else setLoading(false);
  }, []);
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: 30,
        }}
      >
        Loading...
      </div>
    );
  }
  return (
    <HelmetProvider>
      <ToastContainer />
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
            element={
              <ProtectedRoute
                isAllowed={user && user.role === "admin"}
                redirectPath="/403"
              />
              //  <Regimedash isOnDashboard/>
            }
          >
            <Route path="/Dash" element={<Dashboard />}>
              <Route index element={<ProductsDash />} />
              <Route path="dashProducts" index element={<ProductsDash />} />

              <Route
                path="trainingDash"
                index
                element={<PersonnalTrainingDash />}
              />

              <Route path="dashGymPlans" element={<GymPlan />} />
            </Route>
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/403" element={<Forbidden />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
