import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Home from "./pages/Home";
import Layout from "./Layout";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="News" element={<News />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
