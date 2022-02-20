import React from 'react';
import { Card, CardActionArea, CardProps } from '@mui/material';

type BaseCardProps = React.PropsWithChildren<
  CardProps & {
    hasActionArea?: boolean;
  }
>;

function BaseCard({ hasActionArea, children, ...rest }: BaseCardProps) {
  return (
    <Card square elevation={0} {...rest}>
      {hasActionArea ? <CardActionArea>{children}</CardActionArea> : children}
    </Card>
  );
}

export default BaseCard;
