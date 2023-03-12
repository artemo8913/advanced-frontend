type Mods = Record<string, boolean | string>;

export function createClassName(primaryClassName: string, mods: Mods = {}, additional: Array<string> = []): string {
  return [
    primaryClassName,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([_, condition]) => Boolean(condition))
      .map(([mod, _]) => mod),
  ].join(" ");
}
