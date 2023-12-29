import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  const navigate = useNavigation();
  const idPageLoading = navigate.state === 'loading';
  return (
    <>
      <Navbar />
      <section className="page">
        {idPageLoading ? <div className="loading"></div> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
