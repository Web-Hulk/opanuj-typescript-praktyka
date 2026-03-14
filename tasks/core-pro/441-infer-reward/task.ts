export type RewardRadar<T extends string> =
  T extends `${infer _Before}⚡️[${infer Reward}]⚡️${infer _After}` ? Reward : null;
