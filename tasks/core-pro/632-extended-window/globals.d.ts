declare global {
  interface Window {
    analytics: {
      trackEvent: (value: string) => void;
    };
  }
}

export {};
