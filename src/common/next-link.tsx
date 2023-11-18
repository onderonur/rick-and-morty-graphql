import classNames from 'classnames';
import Link from 'next/link';

type NextLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export function NextLink({ className, ...rest }: NextLinkProps) {
  return (
    <Link
      prefetch={false}
      className={classNames(
        className,
        'text-emerald-400 hover:text-emerald-300',
      )}
      {...rest}
    />
  );
}
