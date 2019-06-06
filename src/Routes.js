import React from "react";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

function Routes() {
  return (
    <>
      <Route exact path={["/", "/characters"]} component={CharacterList} />
      <Route exact path={"/characters/:characterId"} component={Character} />
    </>
  );
}

export default Routes;
