import React from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import styleSheet from "./collectiblesview.scss.js";
import { useQuery } from "https://tfl.dev/@truffle/api@~0.1.0/client.ts";
import { COLLECTIBLE_CONNECTION_QUERY } from "../gql.ts";
import globalContext from "https://tfl.dev/@truffle/global-context@^1.0.0/index.ts";
import { CollectibleConnectionResponse, Collectible } from "../types.ts";
import CollectibleCard from "../CollectibleCard/collectiblecard.tsx";
import Link from "https://tfl.dev/@truffle/router@^1.0.0/components/link/link.tag.ts";

export default function CollectiblesView() {
  useStyleSheet(styleSheet);
  const context = globalContext.getStore();

  // Execute query to fetch all collectibles
  const [{ data: collectibleConnectionData }] = useQuery({
    query: COLLECTIBLE_CONNECTION_QUERY,
    variables: {
      input: {
        orgId: context?.orgId,
        type: "redeemable",
      },
      first: 100
    },
  });

  // Begin constructing list of card components
  const collectibleConnection: CollectibleConnectionResponse = (collectibleConnectionData as CollectibleConnectionResponse)?.collectibleConnection;
  const collectibleList: Collectible[] = collectibleConnection?.nodes;
  const cardList: CollectibleCard[] = [];

  // First, upsert component for adding new collectibles
  cardList.push(
      <Link className="new-card" href="/collectibles/new">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
        </div>
        <div>
          Add New Collectible
        </div>
      </Link>
  );

  // Add all Minecraft collectibles to list
  if (collectibleList) {
    for (const node of collectibleList) {
      let { name, data: { description, redeemData: { eventTopicSlug } } } = node;
      if (eventTopicSlug === "minecraft-event-topic") { // We filter by the eventTopicSlug
        cardList.push(
          <CollectibleCard
            collectibleName={name}
            collectibleDescription={description}
          />
        );
      }
    }
  }

  return (
    <div className="collectibles-view">
      {cardList}
    </div>
  );
}
