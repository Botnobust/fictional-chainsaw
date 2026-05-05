import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/principal" element={
        <ProtectedRoute>
          <Principal />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default AppRoutes;