import { isArray } from "../typeguards/is-array";

export const cls = (cls: string | (string | undefined)[]): string => {
  if (!isArray(cls)) return cls.trim();

  const truthyClasses = cls.filter((cl) => !!cl);

  return truthyClasses.join(" ").trim();
};
