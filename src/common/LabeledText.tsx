import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import NextLink, { NextLinkProps } from '../routing/NextLink';

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export interface LabeledTextProps {
  label: string;
  text: React.ReactNode;
  href?: NextLinkProps['href'];
}

const LabeledText = React.memo<LabeledTextProps>(function LabeledText({
  label,
  text,
  href,
}: LabeledTextProps) {
  const classes = useStyles();

  const textComponent = (
    <Typography
      className={classes.text}
      color={href ? undefined : 'secondary'}
      variant="h6"
      component="p"
    >
      {text}
    </Typography>
  );

  return (
    <div>
      <Typography color="textSecondary" variant="button">
        {label}
      </Typography>
      {href ? (
        <NextLink href={href} isMuiLink>
          {textComponent}
        </NextLink>
      ) : (
        textComponent
      )}
    </div>
  );
});

export default LabeledText;
