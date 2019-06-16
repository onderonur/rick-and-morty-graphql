import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import placeholderPng from "assets/placeholder.png";
import clsx from "clsx";
import AspectRatio from "components/AspectRatio";
import useVisibilityTracker from "hooks/useVisibilityTracker";

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

function BaseImage({
  src = placeholderPng,
  alt = DEFAULT_ALT,
  aspectRatio = ORIGINAL,
  lazyLoad = true
}) {
  const classes = useStyles();
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [ref, { isVisible }] = useVisibilityTracker();
  const [initialized, setInitialized] = useState(!lazyLoad);

  const isOriginalAspectRatio = aspectRatio === ORIGINAL;

  function handleLoad(e) {
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
      ref={lazyLoad ? ref : undefined}
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
