import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App.tsx";

import "./style/index.css";
import "./style/globals.css";
import '@fontsource/poppins';

const rootEl: HTMLDivElement = document.querySelector("#root")!;
const root: Root = createRoot(rootEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
