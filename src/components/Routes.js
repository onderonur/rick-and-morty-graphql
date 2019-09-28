import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Characters from "pages/Characters";
import Character from "pages/Character";
import Episodes from "pages/Episodes";
import Episode from "pages/Episode";
import Home from "pages/Home";
import Locations from "pages/Locations";
import Location from "pages/Location";

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
