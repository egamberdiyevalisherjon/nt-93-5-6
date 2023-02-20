import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
