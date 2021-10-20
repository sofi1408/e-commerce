import React from "react";
import dynamic from "next/dynamic";

// import AppHeader from "../AppHeader/AppHeader";

const AppHeaderComponent = dynamic(() => import("../AppHeader/AppHeader"), {
  ssr: false,
});

const Layout = () => {
  return <AppHeaderComponent />;
};

export default Layout;
