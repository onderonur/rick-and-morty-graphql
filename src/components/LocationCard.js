// OK
import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import TextWithLabel from "./TextWithLabel";
import BaseCard from "./BaseCard";

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

export default LocationCard;
