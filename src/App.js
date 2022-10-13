import "./App.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Home from "./components/Home/home";
import FarmerRegister from "./components/Register/farmerRegister";
import SupplierRegister from "./components/Register/supplierRegister";
import FarmerLogin from "./components/Login/farmerLogin";
import SupplierLogin from "./components/Login/supplierLogin";
import AddComplaint from "./components/Complaint/addComplaint";
import AddAdvertisement from "./components/Advertisement/addAdvertisement";
import FarmerDashboard from "./components/Dashboard/farmerDashboard";
import Userprofile from "./components/FarmerProfile/Userprofile";
import UpdateProfile from "./components/FarmerUpdateProfile/UpdateProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<FarmerLogin />} />
          <Route path="/registerfarmer" element={<FarmerRegister />} />
          <Route path="/supplier" element={<SupplierLogin />} />
          <Route path="/registersupplier" element={<SupplierRegister />} />
          <Route path="/farmer/addcomplaint" element={<AddComplaint />} />
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/viewFarmer" element={<Userprofile/>} />
          <Route path="/editFarmer" element={<UpdateProfile/>} />
          
          <Route
            path="/supplier/addAdvertisement"
            element={<AddAdvertisement />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
