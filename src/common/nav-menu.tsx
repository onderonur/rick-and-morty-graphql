'use client';

import { useState } from 'react';
import Button from './button';
import NextLink from './next-link';
import ListItem from './list-item';
import ListItemTitle from './list-item-title';
import List from './list';
import { useOnRouteChange } from '@/routing/routing-hooks';

type NavMenuProps = {
  headerRef: React.RefObject<React.ElementRef<'header'>>;
};

export default function NavMenu({ headerRef }: NavMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useOnRouteChange(() => {
    setIsMenuOpen(false);
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
          onClick={() => {
            setIsMenuOpen((current) => !current);
          }}
        >
          ▼
        </Button>
        {isMenuOpen && (
          <div
            className="p-4 absolute left-0 right-0 z-10 bg-slate-800 border-4 border-slate-300 -mt-1"
            style={{
              top: headerRef.current?.getBoundingClientRect().bottom,
            }}
          >
            <nav>
              <List>{listItems}</List>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
