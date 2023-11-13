import classNames from 'classnames';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(className, 'nes-btn is-primary')}
      type={type}
      {...rest}
    />
  );
}
