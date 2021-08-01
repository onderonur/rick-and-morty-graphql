import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "@/theming/theme";
import HideOnScroll from "@/layout/HideOnScroll";
import AppHeader from "@/layout/AppHeader";
import { Container } from "@material-ui/core";
import AppDrawer from "@/layout/AppDrawer";
import BackToTopButton from "@/layout/BackToTopButton";

// https://nextjs.org/docs/api-reference/next.config.js/environment-variables
// Trying to destructure process.env variables won't work due to the nature of webpack DefinePlugin.

const useStyles = makeStyles(() => ({
  toolbar: { ...theme.mixins.toolbar },
  main: {
    padding: theme.spacing(2),
  },
}));

type AppLayoutProps = React.PropsWithChildren<{}>;

function AppLayout({ children }: AppLayoutProps) {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppHeader />
      </HideOnScroll>
      <div className={classes.toolbar} />
      <AppDrawer />
      <BackToTopButton />
      <Container className={classes.main} maxWidth="lg" component="main">
        <>{children}</>
      </Container>
    </>
  );
}

export default AppLayout;
