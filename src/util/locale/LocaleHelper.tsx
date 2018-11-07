import * as React from 'react';

export function renderParagraphs(translation: string | Array<any>): React.ReactNode {
  return Array.isArray(translation)
    ? translation.map(item => <p key={item}>{item}</p>)
    : translation;
}
