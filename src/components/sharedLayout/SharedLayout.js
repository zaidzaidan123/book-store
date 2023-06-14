import React, { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import WelcomeWebsite from "../welcomeWebsite/WelcomeWebsite";
import Favorite from "../favorite/Favorite";

const SharedLayout = () => {
  const [favDisplay, setFavDisplay] = useState(false);
  return (
    <>
      <Header favDisplay={favDisplay} setFavDisplay={setFavDisplay} />
      <WelcomeWebsite />
      <Outlet />
      <Favorite favDisplay={favDisplay} />
      <Footer />
    </>
  );
};

export default SharedLayout;
