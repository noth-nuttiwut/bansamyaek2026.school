export {};

declare global {
  interface Window {
    RufflePlayer: {
      newest: () => {
        createPlayer: () => RufflePlayerInstance;
      };
    };
  }

  interface RufflePlayerInstance extends HTMLElement {
    load: (options: string | object) => Promise<void>;
    style: CSSStyleDeclaration;
  }
}