import React from 'react';
import { CardHeader, CardContent } from '@mui/material';
import BaseCard from '@/common/BaseCard';
import gql from 'graphql-tag';
import { LocationCard_LocationFragment } from '@/generated/graphql';
import LabeledTextList from '../common/LabeledTextList';
import { UNKNOWN } from '../common/CommonUtils';

interface LocationCardProps {
  titleAs?: React.ElementType;
  location: LocationCard_LocationFragment;
}

function LocationCard({ titleAs, location }: LocationCardProps) {
  return (
    <BaseCard>
      <CardHeader
        title={location.name}
        titleTypographyProps={{ component: titleAs }}
      />
      <CardContent>
        <LabeledTextList
          data={[
            { label: 'Type', text: location.type ?? UNKNOWN },
            { label: 'Dimension', text: location.dimension ?? UNKNOWN },
          ]}
        />
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
  `,
};

export default LocationCard;
