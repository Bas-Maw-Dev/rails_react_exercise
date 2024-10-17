import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { createRoot } from "react-dom/client"
import App from "./App"

document.addEventListener("turbo:load", () => {
  const root = createRoot(
  document.body.appendChild(document.createElement("div"))
  );
  root.render(<App />);
  });

export default (
<Router>
<Routes>
<Route path="/" element={<Home />} />
</Routes>
</Router>
);