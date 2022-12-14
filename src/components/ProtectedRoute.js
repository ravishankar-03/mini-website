import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUser = () => {
    const userData = localStorage.getItem("email");
    if (!userData || userData === "undefined") {
      setIsLoggedIn(false);
      return navigate("/signup");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUser();
  }, [isLoggedIn]);

  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};

export default ProtectedRoute;
