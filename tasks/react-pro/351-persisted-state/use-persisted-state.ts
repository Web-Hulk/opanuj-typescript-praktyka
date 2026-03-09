import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// Przeciążenia funkcji
export function usePersistedState<T>(key: string, initial: T): [T, Dispatch<SetStateAction<T>>];
export function usePersistedState<T>(
  key: string,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>];

export function usePersistedState<T>(key: string, initial?: T) {
  const getInitialValue = (): T | undefined => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return JSON.parse(storedValue) as T;
    }
    return initial;
  };

  const [state, setState] = useState<T | undefined>(getInitialValue);

  useEffect(() => {
    if (state !== undefined) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState] as const;
}
