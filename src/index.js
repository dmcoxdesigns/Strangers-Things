import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NavBar } from "components";
import { Login } from
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <App />
    <Home />
    <Posts />
    <Login />
    <Profile />

  </BrowserRouter>
);
