import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const token = sessionStorage.getItem("adminToken");
    const location = useLocation();

    if (!token) {
        // Redirect to login if not authenticated, saving the intended destination
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    return children;
};
