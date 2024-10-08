import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.ts", "**/*.stories.tsx"]
      }),
      postcss({
        extensions: ['.css']
      })
    ],
  },
  {
    input: 'dist/cjs/index.d.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
    external: [/\.css$/]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];