import React from "https://npm.tfl.dev/react";
import { toDist } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import Header from "../../../components/Header/header.tsx";
import NewCollectibleView from "../../../components/NewCollectibleView/newcollectibleview.tsx";
import PageWrapper from "../../../components/PageWrapper/pagewrapper.tsx";

function NewCollectiblePage() {
  return (
    <PageWrapper>
      <Header titleText="Add New Collectible" />
      <NewCollectibleView />
    </PageWrapper>
  );
}

export default toDist(NewCollectiblePage, import.meta.url);
