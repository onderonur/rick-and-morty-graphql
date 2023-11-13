import classNames from 'classnames';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input className={classNames(className, 'nes-input is-dark')} {...rest} />
  );
}
