import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/en/Home";
import Services from "./components/en/Services";
import Contacts from "./components/en/Contacts";
import Homebg from "./components/bg/Homebg";
import Servicesbg from "./components/bg/Servicesbg";
import Contactsbg from "./components/bg/Contactsbg";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homebg} />
        <Route exact path="/services" component={Servicesbg} />
        <Route exact path="/contacts" component={Contactsbg} />
        <Route exact path="/en" component={Home} />
        <Route exact path="/en/services" component={Services} />
        <Route exact path="/en/contacts" component={Contacts} />
      </Switch>
    </div>
  );
};

export default MainRouter;
