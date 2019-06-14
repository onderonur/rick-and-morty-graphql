// OK
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Characters from "pages/Characters";
import Character from "pages/Character";
import Episodes from "pages/Episodes";
import Episode from "pages/Episode";

function Routes() {
  return (
    <Switch>
      <Route exact path={["/", "/characters"]} component={Characters} />
      <Route path="/characters/:characterId" component={Character} />
      <Route exact path="/episodes" component={Episodes} />
      <Route path="/episodes/:episodeId" component={Episode} />

      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default Routes;
