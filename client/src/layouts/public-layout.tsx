import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Publiclayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      navigate("/profile");
    }
  }, []);
  return <div>{children}</div>;
}

export default Publiclayout;
