import React from "react";
import { Typography, Container, Grid, CardContent } from "@material-ui/core";
import BaseCard from "./BaseCard";
import LoadingIndicator from "./LoadingIndicator";

interface ProfileProps {
  infoCard: React.ReactNode;
  fullWidthInfoCard?: boolean;
  mainSectionTitle: string;
  mainSection: React.ReactNode;
  loading: boolean;
}

function Profile({
  infoCard,
  fullWidthInfoCard,
  mainSectionTitle,
  mainSection,
  loading
}: ProfileProps) {
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
