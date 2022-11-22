import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { ColorRing } from "react-loader-spinner";
import useAdmin from "../../Hooks/useAdmin";
const AdminRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loader || isAdminLoading) {
    return (
      <div style={{ marginLeft: "45%" }}>
        <ColorRing
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
