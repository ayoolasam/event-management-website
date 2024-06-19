import ThemeProvider from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Home from "./Pages/private/Home";
import ProfilePage from "./Pages/private/index";
import Publiclayout from "./layouts/public-layout";
import Privatelayout from "./layouts/private-layout";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <Publiclayout>
                <Login />
              </Publiclayout>
            }
          />
          <Route
            path="/register"
            element={
              <Publiclayout>
                <Register />
              </Publiclayout>
            }
          />
          <Route
            path="/"
            element={
              <Privatelayout>
                <Home />
              </Privatelayout>
            }
          />
          <Route
            path="/profile"
            element={
              <Privatelayout>
                <ProfilePage />
              </Privatelayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
