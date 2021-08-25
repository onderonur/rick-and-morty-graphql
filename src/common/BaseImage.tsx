import React from 'react';
import Image, { ImageProps } from 'next/image';

type BaseImageProps = ImageProps;

function BaseImage(props: BaseImageProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      // We set image as `unoptimized` to not exceed the
      // fair usage policy of vercel about image optimization.
      // https://vercel.com/docs/platform/fair-use-policy
      unoptimized={true}
    />
  );
}

export default BaseImage;
