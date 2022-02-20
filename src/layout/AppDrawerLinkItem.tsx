import React from 'react';
import { styled } from '@mui/material';
import { NextLinkProps } from '@/routing/NextLink';
import { useRouter } from 'next/router';
import ListItemLink from '@/common/ListItemLink';

const Emoji = styled('span')(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

interface AppDrawerLinkItemProps {
  href: NextLinkProps['href'];
  ariaLabel: React.AriaAttributes['aria-label'];
  emoji: string;
  title: string;
}

function AppDrawerLinkItem({
  href,
  ariaLabel,
  emoji,
  title,
}: AppDrawerLinkItemProps) {
  const router = useRouter();

  return (
    <ListItemLink
      primary={
        <>
          <Emoji role="img" aria-label={ariaLabel}>
            {emoji}
          </Emoji>
          {title}
        </>
      }
      href={href}
      selected={router.pathname === href}
    />
  );
}

export default AppDrawerLinkItem;
