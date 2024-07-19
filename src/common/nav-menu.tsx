import { NextLink } from '@/routing/next-link';
import { useOnRouteChange } from '@/routing/routing-hooks';
import { useState } from 'react';
import { Button } from '../common/button';
import { List, ListItem, ListItemTitle } from '../common/list';
import { Popper } from '../common/popper';

function NavMenuItems() {
  return (
    <>
      <ListItem>
        <NextLink href="/characters">
          <ListItemTitle>Characters</ListItemTitle>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/locations">
          <ListItemTitle>Locations</ListItemTitle>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/episodes">
          <ListItemTitle>Episodes</ListItemTitle>
        </NextLink>
      </ListItem>
    </>
  );
}

type MobileNavMenuProps = {
  headerRef: React.RefObject<React.ElementRef<'header'>>;
};

export function MobileNavMenu({ headerRef }: MobileNavMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useOnRouteChange(() => {
    setIsMobileMenuOpen(false);
  });

  return (
    <div className="sm:hidden">
      <Button
        className="text-xs"
        aria-label="Open navigation menu"
        onClick={() => {
          setIsMobileMenuOpen((current) => !current);
        }}
      >
        ▼
      </Button>
      {isMobileMenuOpen && (
        <Popper
          className="left-0 right-0 -mt-1"
          parentRef={headerRef}
          onClickOutside={() => {
            setIsMobileMenuOpen(false);
          }}
        >
          <nav>
            <List>
              <NavMenuItems />
            </List>
          </nav>
        </Popper>
      )}
    </div>
  );
}

export function NavMenu() {
  return (
    <div className="hidden sm:block">
      <nav>
        <List direction="horizontal" className="text-xs">
          <NavMenuItems />
        </List>
      </nav>
    </div>
  );
}
