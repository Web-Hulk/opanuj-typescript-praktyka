import { type FeatureFlags } from './legacy-flags.ts';

type FlagsV2<T> = {
  [Prop in keyof T as Prop extends `${infer Prefix}V2${infer Suffix}`
    ? `${Prefix}${Suffix}`
    : never]: T[Prop];
};

export type ModernFeatureFlags = FlagsV2<FeatureFlags>;

export function getFeatureFlagsV2(flags: FeatureFlags): ModernFeatureFlags {
  const flagsV2 = {} as ModernFeatureFlags;

  for (const key in flags) {
    if (key.includes('V2')) {
      const newKey = key.replace('V2', '') as keyof ModernFeatureFlags;
      flagsV2[newKey] = flags[key as keyof FeatureFlags];
    }
  }
  return flagsV2;
}
