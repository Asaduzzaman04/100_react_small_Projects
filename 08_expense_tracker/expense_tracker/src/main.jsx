import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
);
