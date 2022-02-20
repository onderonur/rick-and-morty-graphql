import React from 'react';
import { Typography, styled } from '@mui/material';
import NextLink, { NextLinkProps } from '../routing/NextLink';

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
})) as typeof Typography;

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
  const textComponent = (
    <Text color={href ? undefined : 'secondary'} variant="h6" component="p">
      {text}
    </Text>
  );

  return (
    <div>
      <Typography color="textSecondary" variant="button">
        {label}
      </Typography>
      {href ? (
        <NextLink href={href} underline="hover" color="primary">
          {textComponent}
        </NextLink>
      ) : (
        textComponent
      )}
    </div>
  );
});

export default LabeledText;
