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
    // The adjacent apps' static exports, dropped in by scripts/embed-app.sh.
    // Someone else's minified bundles — linting them turns up thousands of
    // warnings about mangled variable names and tells us nothing.
    "public/*/_next/**",
  ]),
]);

export default eslintConfig;
