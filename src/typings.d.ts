interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules
declare module '*.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

// type shims for SVG icons
declare module '*.svg';

// Exposing the webpackPublicPath
interface Window {
  webpackPublicPath: string;
}
