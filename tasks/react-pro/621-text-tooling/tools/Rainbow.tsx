import React from 'react';
import { TextProps } from './BaseText';

function rainbowText(text: string) {
  return text.split('').map((char: string, index: number) => {
    const hue = Math.floor((index / text.length) * 360);
    return (
      <span key={index} style={{ color: `hsl(${hue}, 80%, 50%)` }}>
        {char}
      </span>
    );
  });
}

export default function withRainbow<T extends TextProps>(_Component: React.ComponentType<T>) {
  const Rainbow = (props: T) => (
    <span data-testid="rainbow">
      {typeof props.text === 'string' ? rainbowText(props.text) : props.text}
    </span>
  );
  Rainbow.displayName = 'Rainbow';
  return Rainbow;
}
