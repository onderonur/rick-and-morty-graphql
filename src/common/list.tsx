import { twMerge } from 'tailwind-merge';

type ListProps = React.PropsWithChildren<{
  direction?: 'vertical' | 'horizontal';
  className?: string;
}>;

export function List({
  direction = 'vertical',
  className,
  ...rest
}: ListProps) {
  return (
    <ul
      className={twMerge(
        'flex [&>li]:border-slate-400',
        direction === 'horizontal'
          ? 'gap-3'
          : 'flex-col [&>li:last-child]:border-b-0 [&>li]:border-b-2',
        className,
      )}
      {...rest}
    />
  );
}

type ListItemProps = React.PropsWithChildren;

export function ListItem({ children }: ListItemProps) {
  return <li className="[&>*]:block [&>*]:py-3">{children}</li>;
}

type ListItemTitleProps = React.PropsWithChildren;

export function ListItemTitle(props: ListItemTitleProps) {
  return <div className="font-semibold" {...props} />;
}

type ListItemSubtitleProps = React.PropsWithChildren;

export function ListItemSubtitle(props: ListItemSubtitleProps) {
  return <div className="mt-1 text-sm text-slate-300" {...props} />;
}
