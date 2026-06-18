// SPDX-FileCopyrightText: 2026 Rishvic Pushpakaran
//
// SPDX-License-Identifier: MIT

import { fileURLToPath } from "url";
import js from "@eslint/js";
import globals from "globals";
import { defineConfig, globalIgnores, includeIgnoreFile } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
  globalIgnores(
    [
      // Generated source files
      "src/*.json",
      "src/parser.c",
      "src/tree_sitter/*",

      // C bindings
      "bindings/c/**",
      "CMakeLists.txt",
      "Makefile",

      // Rust bindings
      "bindings/rust/*",
      "Cargo.toml",
      "Cargo.lock",

      // Node.js bindings
      "bindings/node/*",
      "binding.gyp",
      "package.json",
      "package-lock.json",

      // Python bindings
      "bindings/python/**",
      "setup.py",
      "pyproject.toml",

      // Go bindings
      "bindings/go/*",
      "go.mod",
      "go.sum",

      // Swift bindings
      "bindings/swift/**",
      "Package.swift",
      "Package.resolved",

      // Zig bindings
      "bindings/zig/*",
      "build.zig",
      "build.zig.zon",

      // Java bindings
      "pom.xml",
      "bindings/java/**",
    ],
    "Ignore Generated Source Files and Bindings",
  ),
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        RustRegex: "readonly",
        alias: "readonly",
        blank: "readonly",
        field: "readonly",
        choice: "readonly",
        optional: "readonly",
        prec: "readonly",
        repeat: "readonly",
        repeat1: "readonly",
        reserved: "readonly",
        seq: "readonly",
        sym: "readonly",
        token: "readonly",
        grammar: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: String.raw`^\$$` }],
    },
  },
  eslintConfigPrettier,
]);
