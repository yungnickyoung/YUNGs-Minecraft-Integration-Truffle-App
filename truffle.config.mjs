export default {
  name: "@early-access-yungnickyoung/yungs-minecraft-integration",
  version: "0.0.10",
  apiUrl: "https://mycelium.staging.bio/graphql",
  requestedPermissions: [
    {
      filters: { collectible: { isAll: true, rank: 0 } },
      action: "update",
      value: true,
    },
    {
      filters: { eventSubscription: { isAll: true, rank: 0 } },
      action: "update",
      value: true,
    },
    {
      filters: { eventTopic: { isAll: true, rank: 0 } },
      action: "update",
      value: true,
    },
  ],
  // installActionRel specifies a workflow action to run upon installation
  installActionRel: {
    // A workflow runs a list of actions
    actionPath: "@truffle/core@latest/_Action/workflow",
    runtimeData: {
      mode: "sequential", // sequential | parallel
      stepActionRels: [
        // This action will create a custom event topic 'minecraft-event-topic'
        // that will be broadcast when the collectible (see below) is redeemed.
        // This is used to forward an event to a webhook which handles updating
        // all users of the Truffle Integration API Minecraft mod
        {
          actionPath: "@truffle/core@latest/_Action/graphql",
          runtimeData: {
            query: `
              mutation EventTopicUpsert ($input: EventTopicUpsertInput!) {
                eventTopicUpsert(input: $input) {
                  eventTopic {
                    id
                    orgId
                    packageVersionId
                    slug
                  }
                }
              }`,
            variables: {
              input: {
                slug: "minecraft-event-topic",
              },
            },
          },
        },
        // This action will create a collectible that users can redeem
        // that will broadcast the custom 'minecraft-event-topic' event topic.
        {
          actionPath: "@truffle/core@latest/_Action/graphql",
          runtimeData: {
            query: `
              mutation CollectibleUpsert ($input: CollectibleUpsertInput!) {
                collectibleUpsert(input: $input) {
                  collectible {
                    id
                    name
                    type
                  }
                }
              }`,
            variables: {
              input: {
                name: "Summon Creepers",
                slug: "minecraft-spawn-creepers",
                type: "redeemable",
                data: {
                  redeemType: "event",
                  redeemButtonText: "Activate",
                  description: "Summon a group of Creepers to surprise attack the streamer!",
                  redeemData: {
                    eventTopicSlug: "minecraft-event-topic",
                    actionType: "spawn-mob",
                    actionData: {
                      mobType: "minecraft:creeper",
                      mobAmount: 3,
                      mobNbt: "",
                    }
                  },
                },
              },
            },
          },
        },
        // This action will create an event subscription for a webhook to a google cloud function
        {
          actionPath: "@truffle/core@latest/_Action/graphql",
          runtimeData: {
            query: `
            mutation EventSubscriptionUpsert ($input: EventSubscriptionUpsertInput!) {
              eventSubscriptionUpsert(input: $input) {
                eventSubscription { id }
              }
            }`,
            variables: {
              input: {
                // The event topic the subscription exists for
                eventTopicSlug: "minecraft-event-topic",
                actionRel: {
                  actionPath: "@truffle/core@1.0.0/_Action/webhook",
                  runtimeData: {
                    // The endpoint for the webhook function
                    endpoint:
                      "https://us-east1-truffle-minecraft-integration.cloudfunctions.net/function-publish-message",
                  },
                },
              },
            },
          },
        },
      ],
    },
  },
}
