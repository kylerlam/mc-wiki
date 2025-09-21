import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Gallery from "./pages/your_first_component/Gallery.jsx";
// Default_Function 可以随意起名
import Default_Output from "./pages/component_import_output/export.jsx";
// 具名导入 必须加 {}
import { Naming } from "./pages/component_import_output/export.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Default_Output />
    <Naming />
    <Gallery />
  </StrictMode>,
);
