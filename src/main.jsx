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

const games = [
  {
    id: "2",
    name: "BOWLING",
    image: "assets/images/bowling.jpeg",
  },
  {
    id: "3",
    name: "CHESS",
    image: "assets/images/chess.jpeg",
  },
  {
    id: "7",
    name: "BASKETBALL",
    image: "assets/images/basketball.jpeg",
  },
  {
    id: "9",
    name: "POOL",
    image: "assets/images/pool.jpeg",
  },
  {
    id: "10",
    name: "CRICKET",
    image: "assets/images/cricket.jpeg",
  },
  {
    id: "11",
    name: "SNOOKER",
    image: "assets/images/snooker.jpeg",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage games={games} />,
      },
      {
        path: "games",
        element: <GamesPage games={games} />,
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
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
