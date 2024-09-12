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
        'flex [&>li]:border-slate-300',
        direction === 'horizontal'
          ? 'gap-3'
          : 'flex-col [&>li:last-child]:border-none [&>li]:border-b',
        className,
      )}
      {...rest}
    />
  );
}

type ListItemProps = React.PropsWithChildren;

export function ListItem({ children }: ListItemProps) {
  return <li className="[&>*]:block [&>*]:py-4">{children}</li>;
}

type ListItemTitleProps = React.PropsWithChildren;

export function ListItemTitle(props: ListItemTitleProps) {
  return <div className="text-lg font-semibold" {...props} />;
}

type ListItemSubtitleProps = React.PropsWithChildren;

export function ListItemSubtitle(props: ListItemSubtitleProps) {
  return <div className="mt-1 font-semibold text-muted" {...props} />;
}
