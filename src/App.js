import "./App.css";
//import { Routes, Route, Navigate, } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route }from "react-router-dom";
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
import SupplierDashboard from "./components/Dashboard/supplierDashboard";
import SupplierUserProfile from "./components/SupplierProfile/Userprofile";
import SupplierUpdateProfile from "./components/SupplierUpdateProfile/UpdateProfile";
import FarmerProtectedRoute from "./FarmerProtectedRoute";
import SupplierProtectedRoute from "./SupplierProtectedRoute";
import AdminLogin from "./components/Login/adminLogin";
import AdminDashboard from "./components/Dashboard/adminDashboard";
import ResolvedComplaint from "./components/Complaint/resolvedComplaint";
import EditAdvertisement from "./components/Advertisement/editAdvertisement";
import AdminProtectedRoute from "./AdminProtectedRoute";

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<FarmerLogin />} />
          <Route path="/registerfarmer" element={<FarmerRegister />} />
          <Route path="/supplier" element={<SupplierLogin />} />
          <Route path="/registersupplier" element={<SupplierRegister />} />
          <Route path="/admin" element={<AdminLogin />} />

          {/* Admin Protected Routes */}
          <Route path="/admin/dashboard" element={
            <AdminProtectedRoute>
              <AdminDashboard/>
            </AdminProtectedRoute>
          
          }/>
          <Route path="/resolvedComplaint" element={
           <AdminProtectedRoute>
            <ResolvedComplaint/>
            </AdminProtectedRoute>}/>

          {/* Farmer Protected Routes */}

          <Route path="/farmer/addcomplaint" element={
          <FarmerProtectedRoute>
          <AddComplaint />
          </FarmerProtectedRoute>} />
          <Route path="/farmer/dashboard" element={
          <FarmerProtectedRoute>
            <FarmerDashboard />
            </FarmerProtectedRoute>} />         
          <Route path="/viewFarmer" element={
          <FarmerProtectedRoute>
            <Userprofile/>
            </FarmerProtectedRoute>} />
          <Route path="/editFarmer" element={
          <FarmerProtectedRoute>
            <UpdateProfile/>
            </FarmerProtectedRoute>} />

          {/* Supplier Protected Routes */}

          <Route path="/supplier/dashboard" element={
          <SupplierProtectedRoute>
            <SupplierDashboard />
            </SupplierProtectedRoute>} />
          <Route path="/viewSupplier" element={
          <SupplierProtectedRoute>
            <SupplierUserProfile/>
            </SupplierProtectedRoute>} />
          <Route path="/editSupplier" element={
          <SupplierProtectedRoute>
            <SupplierUpdateProfile/>
            </SupplierProtectedRoute>} />
          <Route
            path="/supplier/addAdvertisement"
            element={
            <SupplierProtectedRoute>
              <AddAdvertisement />
              </SupplierProtectedRoute>}
          />
          <Route path="/editAdvertisement/:id" element={
          <SupplierProtectedRoute>
          <EditAdvertisement/>
          </SupplierProtectedRoute>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
