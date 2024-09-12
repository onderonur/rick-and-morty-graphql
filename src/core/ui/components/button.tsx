import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function Button({
  className,
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-xl bg-secondary px-3 py-2 font-semibold text-secondary-foreground shadow-clay',
        className,
      )}
      type={type}
      {...rest}
    >
      <span className="drop-shadow-clay">{children}</span>
    </button>
  );
}
