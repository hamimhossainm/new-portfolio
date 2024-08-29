import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Root/RootLayout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
