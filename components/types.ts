export type Collectible = {
  id: string;
  orgId: string;
  slug: string;
  name: string;
  type: string;
  targetType: string;
  data: {
    category: string;
    redeemType: string;
    description: string;
    redeemData: Record<string, unknown>;
  };
};

export type CollectibleConnectionResponse = {
  collectibleConnection: {
    nodes: Collectible[];
    totalCount: number;
  };
};

export type CollectibleUpsertResponse = {
  collectible: Collectible;
};