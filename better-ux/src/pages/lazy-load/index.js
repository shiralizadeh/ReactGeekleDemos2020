import React, { useEffect, useState } from "react";
import { LazyImg } from "../../components";

export function LazyLoad() {
  return (
    <div>
      <LazyImg
        highSrc="react.geekle.png"
        lowSrc="react.geekle.low.png"
        previewClass="preview"
        width="334"
        height="212"
      />
    </div>
  );
}

export default LazyLoad;
