import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import BaseCard from "shared/components/BaseCard";
import TextWithLabel from "shared/components/TextWithLabel";
import gql from "graphql-tag";
import { Location } from "generated/graphql";

interface LocationCardProps {
  location: Location;
}

function LocationCard({ location }: LocationCardProps) {
  return (
    <BaseCard>
      <CardHeader title={location.name} />
      <CardContent>
        {location.type && <TextWithLabel label="Type" text={location.type} />}
        {location.dimension && (
          <TextWithLabel label="Dimension" text={location.dimension} />
        )}
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
