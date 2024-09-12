import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Card({ className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'flex flex-col gap-3 rounded-3xl bg-card p-8 shadow-clay',
        className,
      )}
    />
  );
}

type CardTitleProps<As extends React.ElementType> =
  React.ComponentPropsWithoutRef<As> & {
    as?: As;
    className?: string;
  };

export function CardTitle<As extends React.ElementType>({
  as,
  className,
  ...rest
}: CardTitleProps<As>) {
  const As = as ?? 'h1';

  return (
    <As
      className={twMerge('text-2xl font-bold drop-shadow-clay', className)}
      {...rest}
    />
  );
}

type CardDescriptionProps = {
  children: React.ReactNode;
};

export function CardDescription(props: CardDescriptionProps) {
  return <p className="text-lg font-semibold text-muted" {...props} />;
}

type CardImageProps = Pick<
  ImageProps,
  'src' | 'alt' | 'width' | 'height' | 'priority'
>;

export function CardImage({ alt, ...rest }: CardImageProps) {
  return (
    <Image className={'w-full rounded-3xl object-cover'} alt={alt} {...rest} />
  );
}
