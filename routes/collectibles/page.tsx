import React from "https://npm.tfl.dev/react";
import { toDist } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import Header from "../../components/Header/header.tsx";
import CollectiblesView from "../../components/CollectiblesView/collectiblesview.tsx";
import PageWrapper from "../../components/PageWrapper/pagewrapper.tsx";

function CollectiblesPage() {
  return (
    <PageWrapper>
      <Header titleText="Manage Minecraft Collectibles" />
      <CollectiblesView />
    </PageWrapper>
  );
}

export default toDist(CollectiblesPage, import.meta.url);
