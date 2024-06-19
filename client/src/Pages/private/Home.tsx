import { useEffect, useState } from "react";
import { getUser } from "../../apiServices/users-service";
import { message } from "antd";

function Home() {
  const [user, setUser] = useState<any>(null);

  const getData = async () => {
    try {
      const response = await getUser();
    
      setUser(response.data.user);
    } catch (error: any) {
      message.error(error.response?.data.message || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-5">
      <h1>HOMEPAGE</h1>
      <p> Welcome {user?.name} !</p>
    </div>
  );
}

export default Home;
