type Mods = Record<string, boolean | string>

export function className(cls: string, mods: Mods, additional: Array<string>): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([mod, condition]) => Boolean(condition))
      .map(([mod, condition]) => mod),
  ].join(" ");
}
