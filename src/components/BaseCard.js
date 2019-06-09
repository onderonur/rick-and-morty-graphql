import React from "react";
import { Card } from "@material-ui/core";

function BaseCard({ children }) {
  return (
    <Card square elevation={0}>
      {children}
    </Card>
  );
}

export default BaseCard;
