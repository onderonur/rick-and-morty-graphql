import classNames from 'classnames';
import type { BaseImageProps } from './base-image';
import { BaseImage } from './base-image';

type CardProps = React.PropsWithChildren<{
  className?: string;
  withTitle?: boolean;
}>;

export function Card({ className, withTitle, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={classNames(
        className,
        'nes-container is-rounded is-dark !m-0 flex flex-col gap-2',
        withTitle && 'with-title',
      )}
    />
  );
}

type CardTitleProps = React.PropsWithChildren<{
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}>;

export function CardTitle({ as = 'p', className, ...rest }: CardTitleProps) {
  const As = as;

  return (
    <As
      className={classNames(
        className,
        'title font-semibold',
        // To make it work with `with-title` class of `nes-container`.
        'w-fit',
        // To disable bottom margin applied by `with-title` class of `nes-container`.
        '!mb-0',
      )}
      {...rest}
    />
  );
}

type CardContentProps = React.PropsWithChildren;

export function CardContent(props: CardContentProps) {
  return <div className="flex flex-col gap-3" {...props} />;
}

type CardImageProps = Pick<BaseImageProps, 'src' | 'alt' | 'fill' | 'priority'>;

export function CardImage(props: CardImageProps) {
  return <BaseImage className={'rounded-md object-cover'} {...props} />;
}
