import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Privatelayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token =  Cookies.get("token");

    console.log(`Tokensss :${token}`);
   

    Usage:
  

    if (!token) {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
}

export default Privatelayout;
