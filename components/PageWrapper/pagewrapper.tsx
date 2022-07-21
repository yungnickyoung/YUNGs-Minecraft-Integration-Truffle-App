import React from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import styleSheet from "./pagewrapper.scss.js";

export default function PageWrapper({children}) {
  useStyleSheet(styleSheet);

  return (
    <div className="wrapper">
      {children}
    </div>
  );
}
