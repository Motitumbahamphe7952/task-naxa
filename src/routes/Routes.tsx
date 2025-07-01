import { createRoutesFromElements, Form, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Data from "../pages/Data";

const Routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />

    <Route path="/data" element={<Data />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<About />} />
  </Route>
);

export default Routes;
