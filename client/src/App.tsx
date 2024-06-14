
import ThemeProvider from "./theme";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Home from "./Pages/private/Home";

function App() {
  return (
    <ThemeProvider>
 <BrowserRouter>
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<  Register/>}/>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  
    </ThemeProvider>
  )
}

export default App;
