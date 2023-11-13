import classNames from 'classnames';

type CardTitleProps = React.PropsWithChildren<{
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}>;

export default function CardTitle({
  as = 'p',
  className,
  ...rest
}: CardTitleProps) {
  const As = as;

  return (
    <As
      className={classNames(
        className,
        'font-semibold title',
        // To make it work with `with-title` class of `nes-container`.
        'w-fit',
        // To disable bottom margin applied by `with-title` class of `nes-container`.
        '!mb-0',
      )}
      {...rest}
    />
  );
}
