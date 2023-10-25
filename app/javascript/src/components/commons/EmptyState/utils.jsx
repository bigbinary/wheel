import React from "react";

export const renderImage = image =>
  typeof image === "string" ? <img src={image} /> : image;
