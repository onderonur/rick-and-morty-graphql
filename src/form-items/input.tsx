import { twMerge } from 'tailwind-merge';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...rest }: InputProps) {
  return (
    <input className={twMerge('nes-input is-dark', className)} {...rest} />
  );
}
