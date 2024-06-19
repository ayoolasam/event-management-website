import axios from "axios";


axios.defaults.withCredentials = true;


export const registerUser = async (data:any) => {


  
const response = await axios.post("/api/v1/register",data)
return response.data;


}


export const loginUser = async (data:any) => {
 const response = await axios.post("/api/v1/login",data)
  return response.data;
  
  
  }

  
export const getUser = async () => {
  const response = await axios.get("/api/v1/me")
   return response.data;
   
   
   }
