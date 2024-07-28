import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type NextLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export function NextLink({ className, ...rest }: NextLinkProps) {
  return (
    <Link
      prefetch={false}
      className={twMerge('text-emerald-400 hover:text-emerald-300', className)}
      {...rest}
    />
  );
}
