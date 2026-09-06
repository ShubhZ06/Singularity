import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "scripts/**",
    "components/ui/canvas-reveal-effect.tsx",
    "components/ui/canvas-cursor.tsx",
    "components/ui/starfield-1.tsx",
    "components/Prizes.tsx",
    "hooks/use-canvasCursor.ts",
  ]),
]);

export default eslintConfig;
