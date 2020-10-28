import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AspectRatio, { getAspectRatioString } from "./AspectRatio";
import { isOfType } from "@/modules/shared/SharedUtils";
import Image from "next/image";

const original = "original";
const defaultAspectRatio = getAspectRatioString(1, 1);

const useStyles = makeStyles((theme) => ({
  img: {
    display: "block",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    // To make next/image work with AspectRatio
    position: "absolute",
  },
}));

interface BaseImageProps {
  src: string | undefined;
  alt: string;
  aspectRatio?: string;
}

function BaseImage({
  src = "/images/placeholder.png",
  alt,
  aspectRatio = original,
}: BaseImageProps) {
  const classes = useStyles();
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
        unsized
        onLoad={handleLoad}
      />
    </AspectRatio>
  );
}

export default BaseImage;
