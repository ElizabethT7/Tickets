export function plural(
  value: number,
  variants: { [key: string]: string },
  locale = "ru-RU"
) {
  const key = new Intl.PluralRules(locale).select(value);
  return variants[key] || "";
}
