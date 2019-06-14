// OK
import React from "react";
import { Route } from "react-router-dom";
import Character from "pages/Character";
import Characters from "pages/Characters";

function Routes() {
  return (
    <>
      <Route exact path={["/", "/characters"]} component={Characters} />
      <Route exact path={"/characters/:characterId"} component={Character} />
    </>
  );
}

export default Routes;
