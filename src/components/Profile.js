import React from "react";
import { Typography, Container, Grid, CardContent } from "@material-ui/core";
import BaseCard from "./BaseCard";
import LoadingIndicator from "./LoadingIndicator";

function Profile({
  infoCard,
  fullWidthInfoCard,
  mainSectionTitle,
  mainSection,
  loading
}) {
  return (
    <Container maxWidth="lg">
      <LoadingIndicator loading={loading}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={fullWidthInfoCard ? 12 : 4}>
            {infoCard}
          </Grid>
          <Grid item xs={12} sm={fullWidthInfoCard ? 12 : 8}>
            <BaseCard>
              <CardContent>
                <Typography variant="h6">{mainSectionTitle}</Typography>
                {mainSection}
              </CardContent>
            </BaseCard>
          </Grid>
        </Grid>
      </LoadingIndicator>
    </Container>
  );
}

export default Profile;
