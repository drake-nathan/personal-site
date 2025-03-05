import { eslintConfig } from "js-style-kit";

export default eslintConfig(
  {
    ignores: [".next"],
    react: true,
    typescript: "tsconfig.eslint.json",
  },
  {
    rules: {
      camelcase: ["warn", { ignoreImports: true }],
    },
  },
);
