import type { BaseImageProps } from './base-image';
import { BaseImage } from './base-image';
import { twMerge } from 'tailwind-merge';

type CardProps = React.PropsWithChildren<{
  className?: string;
  withTitle?: boolean;
}>;

export function Card({ className, withTitle, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'nes-container is-rounded is-dark !m-0 flex flex-col gap-2',
        withTitle && 'with-title',
        className,
      )}
    />
  );
}

type CardTitleProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
  };

export function CardTitle<T extends React.ElementType>({
  as,
  className,
  ...rest
}: CardTitleProps<T>) {
  const As = as ?? 'p';

  return (
    <As
      className={twMerge(
        'title font-semibold',
        // To make it work with `with-title` class of `nes-container`.
        'w-fit',
        // To disable bottom margin applied by `with-title` class of `nes-container`.
        '!mb-0',
        className,
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
