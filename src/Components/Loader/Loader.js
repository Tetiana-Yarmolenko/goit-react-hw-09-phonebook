import React from "react";
import Loader from "react-loader-spinner";

import s from "./Loader.module.css";

const LoaderPreview = () => (
  <div className={s.wrapper}>
     <Loader
        type="Circles"
         color="#00BFFF"
         height={50}
          width={50}
         timeout={2000} //2 secs
      />
   </div>
);

export default LoaderPreview