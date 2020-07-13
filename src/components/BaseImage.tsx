import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
// import placeholderPng from "assets/images/placeholder.png";
import { useTrackVisibility } from "react-intersection-observer-hook";
import AspectRatio, { getAspectRatioString } from "./AspectRatio";
import { isOfType } from "@/utils";

const original = "original";
const defaultAlt = "Not Loaded";
const defaultAspectRatio = getAspectRatioString(1, 1);

const useStyles = makeStyles((theme) => ({
  img: {
    display: "block",
    objectFit: "cover",
  },
}));

interface BaseImageProps {
  src: string | undefined;
  alt: string;
  aspectRatio?: string;
  lazyLoad?: boolean;
}

function BaseImage({
  // TODO: Will fix the placeholder image
  src = undefined /*placeholderPng*/,
  alt = defaultAlt,
  aspectRatio = original,
  lazyLoad = true,
}: BaseImageProps) {
  const classes = useStyles();
  const [imgHeight, setImgHeight] = useState<number>();
  const [imgWidth, setImgWidth] = useState<number>();
  const [ref, { isVisible }] = useTrackVisibility();
  const [lazyLoaded, setLazyLoaded] = useState(isVisible);

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

  useEffect(() => {
    if (isVisible) {
      setLazyLoaded(true);
    }
  }, [isVisible]);

  return (
    <AspectRatio
      ref={lazyLoad ? ref : undefined}
      aspectRatio={
        isOriginalAspectRatio
          ? imgWidth && imgHeight
            ? getAspectRatioString(imgWidth, imgHeight)
            : defaultAspectRatio
          : aspectRatio
      }
    >
      {lazyLoad && !lazyLoaded ? null : (
        <img className={classes.img} src={src} alt={alt} onLoad={handleLoad} />
      )}
    </AspectRatio>
  );
}

export default BaseImage;
