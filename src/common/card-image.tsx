import type { BaseImageProps } from './base-image';
import BaseImage from './base-image';

type CardImageProps = Pick<BaseImageProps, 'src' | 'alt' | 'fill' | 'priority'>;

export default function CardImage(props: CardImageProps) {
  return <BaseImage className={'rounded-md object-cover'} {...props} />;
}
