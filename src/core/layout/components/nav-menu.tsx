import { NextLink } from '@/core/routing/components/next-link';
import { Button } from '@/core/ui/components/button';
import type { DialogRef } from '@/core/ui/components/dialog';
import { Dialog } from '@/core/ui/components/dialog';
import { List, ListItem, ListItemTitle } from '@/core/ui/components/list';
import { useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

function NavMenuItems() {
  return (
    <>
      <ListItem>
        <NextLink href="/">
          <ListItemTitle>Home</ListItemTitle>
        </NextLink>
      </ListItem>
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

export function MobileNavMenu() {
  const dialogRef = useRef<DialogRef>(null);

  return (
    <div className="sm:hidden">
      <Button
        className="text-xs"
        aria-label="Open navigation menu"
        onClick={() => {
          dialogRef.current?.showModal();
        }}
      >
        <RxHamburgerMenu className="text-xl" />
      </Button>
      <Dialog ref={dialogRef} title="Menu">
        <nav>
          <List>
            <NavMenuItems />
          </List>
        </nav>
      </Dialog>
    </div>
  );
}

export function NavMenu() {
  return (
    <div className="hidden sm:block">
      <nav>
        <List direction="horizontal">
          <NavMenuItems />
        </List>
      </nav>
    </div>
  );
}
