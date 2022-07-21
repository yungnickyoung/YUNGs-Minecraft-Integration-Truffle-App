import React, { useState, useEffect } from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import styleSheet from "./newcollectibleview.scss.js";
import { useMutation } from "https://tfl.dev/@truffle/api@~0.1.0/client.ts";
import { COLLECTIBLE_UPSERT_MUTATION } from "../gql.ts";
import Button from "https://tfl.dev/@truffle/ui@~0.1.0/components/button/button.tag.ts";

export default function NewCollectibleView() {
  useStyleSheet(styleSheet);
  const [mutationResult, executeMutation] = useMutation(COLLECTIBLE_UPSERT_MUTATION);

  // State
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [actionType, setActionType] = useState("spawn-mob");
  const [mobType, setMobType] = useState("minecraft:creeper");
  const [mobAmount, setMobAmount] = useState(1);
  const [mobNbt, setMobNbt] = useState("");
  const [isSubmitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    // Ensure necessary fields have been filled.
    // Mob NBT is optional, and thus is not checked here.
    setSubmitEnabled(name
      && description
      && slug
      && actionType
      && mobType
      && mobAmount
    );
  }, [name, description, slug, actionType, mobType, mobAmount, mobNbt]);

  // Functions
  const handleSubmit = async () => {
    const variables = {
      input: {
        slug,
        name,
        type: "redeemable",
        data: {
          redeemType: "event",
          redeemButtonText: "Activate",
          description,
          redeemData: {
            eventTopicSlug: "minecraft-event-topic",
            eventTopicPath: "@early-access-yungnickyoung/yungs-minecraft-integration@0.0.10/_EventTopic/minecraft-event-topic",
            actionType,
            actionData: {
              mobType,
              mobAmount,
              mobNbt,
            }
          },
        },
      },
    };

    await executeMutation(variables);
    alert("Created.");
  };

  const mutationError = mutationResult?.error?.graphQLErrors?.[0];
  
  return (
    <div className="newcollectible-view">
      <div className="form">
        <div className="form-entry">
          <label htmlFor="nameInput">Display Name</label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="descriptionInput">Description</label>
          <textarea
            id="descriptionInput"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="slugInput">Slug</label>
          <input
            id="slugInput"
            type="text"
            value={slug}
            onChange={e => setSlug(e.target.value)}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="actionTypeInput">Action Type</label>
          <input
            id="actionTypeInput"
            type="text"
            value={actionType}
            onChange={e => setActionType(e.target.value)}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="mobTypeInput">Mob Type</label>
          <input
            id="mobTypeInput"
            type="text"
            value={mobType}
            onChange={e => setMobType(e.target.value)}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="mobAmountInput">Mob Amount</label>
          <input
            id="mobAmountInput"
            type="number"
            value={mobAmount}
            onChange={e => setMobAmount(e.target.value)}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="mobNbtInput">Mob NBT</label>
          <textarea
            id="mobNbtInput"
            value={mobNbt}
            onChange={e => setMobNbt(e.target.value)}
          />
        </div>
        <div className="form-entry">
          <Button
            className="primary-button"
            onClick={handleSubmit}
            disabled={!isSubmitEnabled}
          >
            Create Collectible
          </Button>
        </div>
      </div>
      {mutationError &&
        <div className="error">
          {mutationError?.extensions?.info ?? "Error"}
        </div>
      }
    </div>
  );
}
