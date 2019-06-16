import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import placeholderPng from "assets/placeholder.png";
import clsx from "clsx";
import AspectRatio from "components/AspectRatio";
import useVisibilityTracker from "hooks/useVisibilityTracker";

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
  alt = "Not Loaded",
  aspectRatio,
  lazyLoad = true
}) {
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const classes = useStyles();
  const [ref, { isVisible }] = useVisibilityTracker();

  const isOriginalAspectRatio = aspectRatio === "original";

  function handleLoad(e) {
    if (isOriginalAspectRatio) {
      const img = e.target;
      setImgHeight(img.naturalHeight);
      setImgWidth(img.naturalWidth);
    }
  }

  return aspectRatio ? (
    <AspectRatio
      aspectRatio={
        isOriginalAspectRatio ? `${imgWidth}:${imgHeight}` : aspectRatio
      }
    >
      <img
        ref={lazyLoad ? ref : undefined}
        className={clsx(classes.img, classes.imgWithAspectRatio)}
        src={lazyLoad ? (isVisible ? src : placeholderPng) : src}
        alt={alt}
        onLoad={handleLoad}
      />
    </AspectRatio>
  ) : (
    <img className={clsx(classes.img)} src={src} alt={alt} />
  );
}

export default BaseImage;
