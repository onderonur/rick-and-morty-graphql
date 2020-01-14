import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import placeholderPng from "assets/images/placeholder.png";
import clsx from "clsx";
import { useTrackVisibility } from "react-intersection-observer-hook";
import AspectRatio from "./AspectRatio";

const ORIGINAL = "original";
const DEFAULT_ALT = "Not Loaded";

const useStyles = makeStyles(theme => ({
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  imgWithAspectRatio: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}));

interface BaseImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  lazyLoad?: boolean;
}

function BaseImage({
  src = placeholderPng,
  alt = DEFAULT_ALT,
  aspectRatio = ORIGINAL,
  lazyLoad = true
}: BaseImageProps) {
  const classes = useStyles();
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [ref, { isVisible }] = useTrackVisibility();
  const [initialized, setInitialized] = useState(isVisible);

  const isOriginalAspectRatio = aspectRatio === ORIGINAL;

  function handleLoad(e: any) {
    if (isOriginalAspectRatio) {
      const img = e.target;
      setImgHeight(img.naturalHeight);
      setImgWidth(img.naturalWidth);
    }
  }

  useEffect(() => {
    if (isVisible) {
      setInitialized(true);
    }
  }, [isVisible]);

  return (
    <AspectRatio
      ref={ref}
      aspectRatio={
        isOriginalAspectRatio ? `${imgWidth}:${imgHeight}` : aspectRatio
      }
    >
      {lazyLoad && !initialized ? null : (
        <img
          className={clsx(classes.img, classes.imgWithAspectRatio)}
          src={src}
          alt={alt}
          onLoad={handleLoad}
        />
      )}
    </AspectRatio>
  );
}

export default BaseImage;
