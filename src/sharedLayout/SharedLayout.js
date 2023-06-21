import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import WelcomeWebsite from "../components/welcomeWebsite/WelcomeWebsite";
import Favorite from "../components/favorite/Favorite";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <WelcomeWebsite />
      <Outlet />
      <Favorite />
      <Footer />
    </>
  );
};

export default SharedLayout;
