import React from 'react';
import { TextProps } from './BaseText';

export default function withItalics<T extends TextProps>(Component: React.ComponentType<T>) {
  const Italic = (props: T) => (
    <em data-testid="italic" style={{ fontStyle: 'italic' }}>
      <Component {...props} />
    </em>
  );
  Italic.displayName = 'Italic';
  return Italic;
}
