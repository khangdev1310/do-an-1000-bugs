import React from "react";
import Header from "./../../components/Header";
import { Route } from "react-router-dom";

const LayoutHome = (props) => {
  return (
    <>
      <Header />
      {props.children}
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
