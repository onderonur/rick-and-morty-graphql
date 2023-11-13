import classNames from 'classnames';

type CardProps = React.PropsWithChildren<{
  className?: string;
  withTitle?: boolean;
}>;

export default function Card({ className, withTitle, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={classNames(
        className,
        'nes-container is-rounded is-dark flex flex-col gap-2 !m-0',
        withTitle && 'with-title',
      )}
    />
  );
}
