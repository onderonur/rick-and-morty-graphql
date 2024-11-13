import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { AsChildProps } from './slot';
import { Slot } from './slot';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'flex flex-col gap-4 rounded-3xl bg-card p-8 shadow-clay',
        className,
      )}
    />
  );
}

type CardTitleProps = AsChildProps & {
  className?: string;
};

export function CardTitle({ asChild, className, ...rest }: CardTitleProps) {
  const Component = asChild ? Slot : 'h1';

  return (
    <Component
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
