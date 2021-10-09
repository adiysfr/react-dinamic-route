import React from "react";
import { Route, Switch } from "react-router";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import DetailPage from "../views/DetailPage";
import NotFound from "../views/NotFound";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch> 
        {/* static routes */}
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        {/* dinamic Routes */}
        <Route path="/detail/:id" exact component={DetailPage} />
        {/* 404 not found */}
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
