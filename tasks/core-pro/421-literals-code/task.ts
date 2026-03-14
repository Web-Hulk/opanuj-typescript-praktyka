type Digit = '0' | '1';

export type Code = `${Digit}${Digit}${Digit}-${Digit}${Digit}${Digit}-${Digit}${Digit}${Digit}`;

export function codeToDecimal(code: Code) {
  return code
    .split('-')
    .map((group) => parseInt(group, 2).toString(10))
    .join('');
}
