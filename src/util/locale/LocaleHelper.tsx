import * as React from 'react';

/**
 * This method is re-used to render out paragraphs
 *
 * @param translation
 * @param applyFormatter
 */
export function renderParagraphs(
  translation: string | Array<any>,
  applyFormatter: (...args: any) => string,
): React.ReactNode {
  return Array.isArray(translation)
    ? translation.map(item => <p key={item}>{applyFormatter(item)}</p>)
    : translation;
}
