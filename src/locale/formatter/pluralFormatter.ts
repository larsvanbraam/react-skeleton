import { inflect } from 'inflection';
import replaceFormatter from './replaceFormatter';

/**
 * # Pluralize part of a string with predefined options.
 *
 * ## Standalone example:
 *
 * ```typescript
 * pluralFormatter('The quick brown fox jumps over the lazy {dog|count|dogs}.', {
 *   count: 3,
 * })
 * ```
 *
 * ## LocalizedText example:
 *
 * ```typescript
 * <LocalizedText
 *   id="translation.selector"
 *   formatters={[
 *     {
 *       formatter: pluralFormatter,
 *       args: {
 *         count: 5,
 *       },
 *     },
 *   ]},
 * />
 * ```
 *
 * @param src The source string that you want to replace the values in
 * @param replacements An object containing the selector and the value for the replacement
 * @returns The source string but with the replaced values
 */
export default function(src: string, replacements: { [key: string]: number }): string {
  return Object.keys(replacements).reduce(
    (text, key) =>
      text.replace(new RegExp(`{([^|{}]+)\\|${key}` + '(?:\\|([^}]+))?}', 'gmi'), (...args) => {
        return inflect(args[1], replacements[key], args[1], args[2]);
      }),
    src,
  );
}
