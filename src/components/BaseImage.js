// OK!!
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import placeholderPng from "assets/placeholder.png";
import clsx from "clsx";
import AspectRatio from "components/AspectRatio";

const useStyles = makeStyles(theme => ({
  img: {
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

function BaseImage({ src, alt = "Not Loaded", aspectRatio }) {
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const classes = useStyles();

  const isOriginalAspectRatio = aspectRatio === "original";

  function handleOnLoad(e) {
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
        className={clsx(classes.img, classes.imgWithAspectRatio)}
        src={src || placeholderPng}
        alt={alt}
        onLoad={handleOnLoad}
      />
    </AspectRatio>
  ) : (
    <img className={clsx(classes.img)} src={src || placeholderPng} alt={alt} />
  );
}

export default BaseImage;
