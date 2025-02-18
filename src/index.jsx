import "../global.css";
import "../styleguide.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeFr } from "./screens/HomeFr";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <HomeFr />
  </StrictMode>,
);
