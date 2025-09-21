import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Gallery from "./your_first_component/Gallery.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Gallery />,
    <Gallery />,
    <Gallery />
  </StrictMode>,
);
