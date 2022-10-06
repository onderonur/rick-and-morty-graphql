import React from 'react';
import HideOnScroll from '@/layout/HideOnScroll';
import AppHeader from '@/layout/AppHeader';
import { Container, Toolbar } from '@mui/material';
import AppDrawer from '@/layout/AppDrawer';
import BackToTopButton from '@/layout/BackToTopButton';

type AppLayoutProps = React.PropsWithChildren<{}>;

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <HideOnScroll>
        <AppHeader />
      </HideOnScroll>
      <Toolbar />
      <AppDrawer />
      <BackToTopButton />
      <Container maxWidth="lg" component="main" sx={{ p: 2 }}>
        <>{children}</>
      </Container>
    </>
  );
}

export default AppLayout;
