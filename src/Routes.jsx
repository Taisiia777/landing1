import React from "react";
import { useRoutes } from "react-router-dom";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import Page3 from "./pages/Page3";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element:  <Page /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/cart",
      element: <Page3 />,
    },
   
  ]);

  return element;
};

export default ProjectRoutes;

