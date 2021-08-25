import React from 'react';
import { CardHeader, CardContent } from '@material-ui/core';
import BaseCard from '@/common/BaseCard';
import gql from 'graphql-tag';
import { LocationCard_LocationFragment } from '@/generated/graphql';
import LabeledTextList from '../common/LabeledTextList';
import { UNKNOWN } from '../common/CommonUtils';

interface LocationCardProps {
  location: LocationCard_LocationFragment;
}

function LocationCard({ location }: LocationCardProps) {
  return (
    <BaseCard>
      <CardHeader title={location.name} />
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
