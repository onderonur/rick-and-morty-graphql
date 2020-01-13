import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import BaseCard from "shared/components/BaseCard";
import TextWithLabel from "shared/components/TextWithLabel";
import gql from "graphql-tag";

function LocationCard({ location }) {
  return (
    <BaseCard>
      <CardHeader title={location.name} />
      <CardContent>
        <TextWithLabel label="Type" text={location.type} />
        <TextWithLabel label="Dimension" text={location.dimension} />
      </CardContent>
    </BaseCard>
  );
}

LocationCard.fragments = {
  location: gql`
    fragment LocationCard_location on Location {
      id
      name
      type
      dimension
    }
  `
};

export default LocationCard;
