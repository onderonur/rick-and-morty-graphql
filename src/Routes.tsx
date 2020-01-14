import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Characters from "./views/Characters";
import Character from "./views/Character";
import Episodes from "./views/Episodes";
import Episode from "./views/Episode";
import Locations from "./views/Locations";
import Location from "./views/Location";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/characters">
        <Characters />
      </Route>
      <Route exact path="/characters/:characterId">
        <Character />
      </Route>
      <Route exact path="/episodes">
        <Episodes />
      </Route>
      <Route path="/episodes/:episodeId">
        <Episode />
      </Route>
      <Route exact path="/locations">
        <Locations />
      </Route>
      <Route path="/locations/:locationId">
        <Location />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;
