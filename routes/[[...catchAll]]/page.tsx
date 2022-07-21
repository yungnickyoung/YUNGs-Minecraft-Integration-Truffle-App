import React from "https://npm.tfl.dev/react";
import { toDist } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

function NotFoundPage() {
  return (
    <>
      404 (Not Found)
    </>
  );
}

export default toDist(NotFoundPage, import.meta.url);
