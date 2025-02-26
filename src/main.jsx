import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { useState } from "react";
import "./assets/index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamesPage from "./components/Pages/Games/GamesPage";
import HomePage from "./components/Pages/Home/HomePage";
import MembershipPage from "./components/Pages/Membership/MembershipPage";
import AboutUsPage from "./components/Pages/AboutUs/AboutUsPage";
import ContactUsPage from "./components/Pages/ContactUs/ContactUsPage";
import LoginPage from "./components/Pages/Login/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "games",
        element: <GamesPage/>,
      },
      {
        path: "membership",
        element: <MembershipPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
