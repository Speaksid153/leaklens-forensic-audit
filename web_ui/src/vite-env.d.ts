/// <reference types="vite/client" />

declare module "*.py?raw" {
  const source: string;
  export default source;
}

declare module "*.csv?raw" {
  const source: string;
  export default source;
}
