import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import BlogDetails from "pages/BlogDetails";
import ContactUs from "pages/ContactUs";
import BloggerDetails from "pages/BloggerDetails";


const ProjectRoutes = () => {

  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <LandingPage />},
    { path: "blogdetails",element: <BlogDetails />},
    { path: "contactus", element: <ContactUs />},
    { path: "bloggerdetails", element: <BloggerDetails />},
  ]);

  return element;
};

export default ProjectRoutes;
