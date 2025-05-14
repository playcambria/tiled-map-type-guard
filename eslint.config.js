import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: true,
    allConfig: true,
});

export default [
    ...compat.config({
        extends: [
            "plugin:@typescript-eslint/eslint-recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:@typescript-eslint/recommended-requiring-type-checking",
        ],
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: "./tsconfig.json",
        },
    }),

    {
        ignores: ["dist/**", "tests/**", "scripts/**", ".yarn/**", "build/**", "node_modules/**", "eslint.config.js"],
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                Atomics: "readonly",
                SharedArrayBuffer: "readonly",
            },
            parser: typescriptParser,
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        files: ["**/*.ts"],
        plugins: {
            "@typescript-eslint": typescriptPlugin,
        },
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { args: "none", caughtErrors: "all", caughtErrorsIgnorePattern: "_exhaustiveCheck" },
            ],
            "no-throw-literal": "error",
            "@typescript-eslint/no-duplicate-type-constituents": "off",
            "@typescript-eslint/no-redundant-type-constituents": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/no-unsafe-enum-comparison": "off",
            "@typescript-eslint/consistent-type-imports": "error",
        },
    },
];
