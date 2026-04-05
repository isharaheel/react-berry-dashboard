import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogOut({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);   
    navigate("/LoginPage");     
  };

  return (
    <div>
      <h1>Are you sure you want to Logout?</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
