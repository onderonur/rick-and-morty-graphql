import { twMerge } from 'tailwind-merge';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={twMerge('rounded-3xl px-6 py-3 shadow-clay', className)}
      {...rest}
    />
  );
}
