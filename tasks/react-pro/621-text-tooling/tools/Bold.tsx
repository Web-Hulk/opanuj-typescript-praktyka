import React from 'react';
import { TextProps } from './BaseText';

export default function withBold<T extends TextProps>(Component: React.ComponentType<T>) {
  const Bold = (props: T) => (
    <strong data-testid="bold" style={{ fontWeight: 'bold' }}>
      <Component {...props} />
    </strong>
  );
  Bold.displayName = 'Bold';
  return Bold;
}
