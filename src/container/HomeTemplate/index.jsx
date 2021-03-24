import React from "react";
import Header from "./../../components/Header";
import { Route } from "react-router-dom";
import Footer from "./../../components/Footer";

const LayoutHome = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
const HomeTemplate = ({ exact, path, component }) => {
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={component} />
    </LayoutHome>
  );
};

export default HomeTemplate;
