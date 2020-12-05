import React from "react";
import { Typography, makeStyles, Link } from "@material-ui/core";
import { Maybe } from "@/generated/graphql";
import NextLink from "./NextLink";

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export interface LabeledTextProps {
  label: string;
  text: React.ReactNode;
  href?: Maybe<string>;
}

const LabeledText = React.memo(({ label, text, href }: LabeledTextProps) => {
  const classes = useStyles();

  const textComponent = (
    <Typography
      className={classes.text}
      color={href ? undefined : "secondary"}
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
        <Link href={href} component={NextLink}>
          {textComponent}
        </Link>
      ) : (
        textComponent
      )}
    </div>
  );
});

export default LabeledText;
