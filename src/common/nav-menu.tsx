'use client';

import { useState } from 'react';
import Button from './button';
import NextLink from './next-link';
import ListItem from './list-item';
import ListItemTitle from './list-item-title';
import List from './list';
import { useOnRouteChange } from '@/routing/routing-hooks';
import Popper from './popper';

type NavMenuProps = {
  headerRef: React.RefObject<React.ElementRef<'header'>>;
};

export default function NavMenu({ headerRef }: NavMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useOnRouteChange(() => {
    setIsMobileMenuOpen(false);
  });

  const listItems = (
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

  return (
    <div>
      <div className="hidden sm:block">
        <nav>
          <List direction="horizontal" className="text-xs">
            {listItems}
          </List>
        </nav>
      </div>
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
              <List>{listItems}</List>
            </nav>
          </Popper>
        )}
      </div>
    </div>
  );
}
