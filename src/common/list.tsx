import classNames from 'classnames';

type ListProps = React.PropsWithChildren<{
  direction?: 'vertical' | 'horizontal';
  className?: string;
}>;

export default function List({
  direction = 'vertical',
  className,
  ...rest
}: ListProps) {
  return (
    <ul
      className={classNames(
        className,
        'flex [&>li]:border-slate-400',
        direction === 'horizontal'
          ? 'gap-3'
          : 'flex-col [&>li]:border-b-2 [&>li:last-child]:border-b-0',
      )}
      {...rest}
    />
  );
}
