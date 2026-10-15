import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Layout from "./Layout.jsx";
import AIPolicy from "./AIPolicy/AIPolicy.jsx";
import About from "./Main/About.jsx";
import Shop from "./Shop/Shop.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<About />} />
        <Route path="ai" element={<AIPolicy />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
