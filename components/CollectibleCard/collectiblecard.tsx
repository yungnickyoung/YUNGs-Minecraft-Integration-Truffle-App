import React from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import styleSheet from "./collectiblecard.scss.js";

type CollectibleCardProps = {
  collectibleName: string;
  collectibleDescription?: string;
};

export default function CollectibleCard(
  {
    collectibleName,
    collectibleDescription,
  }: CollectibleCardProps
) {
  useStyleSheet(styleSheet);

  // Validate description
  if (!collectibleDescription) {
    collectibleDescription = "";
  }
  collectibleDescription = collectibleDescription.length > 83
    ? collectibleDescription.substring(0, 80) + "..."
    : collectibleDescription;

  return (
    <div className="card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Userbox_creeper.svg/800px-Userbox_creeper.svg.png"
        alt="Minecraft Collectible"
        style={{ width: "100%" }}
      />
      <div className="container">
        <h4><b>{collectibleName}</b></h4>
        <p>{collectibleDescription}</p>
      </div>
    </div>
  );
}