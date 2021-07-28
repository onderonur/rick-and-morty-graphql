import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import AspectRatio, { getAspectRatioString } from "./AspectRatio";
import { isOfType } from "@/modules/shared/SharedUtils";
import Image from "next/image";

const original = "original";
const defaultAspectRatio = getAspectRatioString(1, 1);

interface StyleProps {
  aspectRatio?: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  img: {
    display: "block",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    // To make next/image work with AspectRatio
    position: ({ aspectRatio }) => (aspectRatio ? "absolute" : "initial"),
  },
}));

type BaseImageProps = StyleProps & {
  src: string | undefined;
  alt: string;
};

function BaseImage({
  src = "/images/placeholder.png",
  alt,
  aspectRatio = original,
}: BaseImageProps) {
  const classes = useStyles({ aspectRatio });
  const [imgHeight, setImgHeight] = useState<number>();
  const [imgWidth, setImgWidth] = useState<number>();

  const isOriginalAspectRatio = aspectRatio === original;

  function handleLoad(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    if (isOriginalAspectRatio) {
      const img = e.target;
      if (isOfType<HTMLImageElement>(img, ["naturalHeight", "naturalWidth"])) {
        setImgHeight(img.naturalHeight);
        setImgWidth(img.naturalWidth);
      }
    }
  }

  return (
    <AspectRatio
      aspectRatio={
        isOriginalAspectRatio
          ? imgWidth && imgHeight
            ? getAspectRatioString(imgWidth, imgHeight)
            : defaultAspectRatio
          : aspectRatio
      }
    >
      <Image
        className={classes.img}
        src={src}
        alt={alt}
        layout="fill"
        onLoad={handleLoad}
        // We set image as `unoptimized` to not exceed the
        // fair usage policy of vercel about image optimization.
        // https://vercel.com/docs/platform/fair-use-policy
        unoptimized={true}
      />
    </AspectRatio>
  );
}

export default BaseImage;
