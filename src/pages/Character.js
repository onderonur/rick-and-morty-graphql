// OK
import React from "react";
import CharacterQuery from "components/CharacterQuery";
import CharacterProfile from "components/CharacterProfile";

function Character({
  match: {
    params: { characterId }
  }
}) {
  return (
    <CharacterQuery characterId={characterId}>
      {({ character, loading }) => (
        <CharacterProfile character={character} loading={loading} />
      )}
    </CharacterQuery>
  );
}

export default Character;
