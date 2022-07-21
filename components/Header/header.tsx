import React from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import styleSheet from "./header.scss.js";

type HeaderProps = {
  titleText?: string;
};

export default function Header({ titleText }: HeaderProps) {
  useStyleSheet(styleSheet);

  return (
    <header>
      <div className="title">
        {titleText}
      </div>
    </header>
  );
}
