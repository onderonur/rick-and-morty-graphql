import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function Button({ className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge('nes-btn is-primary', className)}
      type={type}
      {...rest}
    />
  );
}
