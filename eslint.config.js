// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettier,
    {
        rules: {
            "prettier/prettier": [
                "error",
                {
                    tabWidth: 4,
                    printWidth: 120,
                },
            ],
        },
    },
];
