import { gql } from "https://tfl.dev/@truffle/api@~0.1.0/client.ts";

export const ME_QUERY = gql`
  query {
    me {
      id
      avatarImage {
        cdn
        prefix
        ext
        variations {
          postfix
          width
          height
        }
        aspectRatio
      }
    }
  }
`;

export const COLLECTIBLE_CONNECTION_QUERY = gql`
query CollectibleConnection ($input: CollectibleConnectionInput) {
  collectibleConnection(input: $input) {
    nodes {
      id
      name
      data {
        redeemType
        redeemData
        description
      }
    }
    totalCount
  }
}
`;

export const COLLECTIBLE_UPSERT_MUTATION = gql`
mutation CollectibleUpsert ($input: CollectibleUpsertInput!) {
  collectibleUpsert(input: $input) {
    collectible{
      id
    }
  }
}
`;