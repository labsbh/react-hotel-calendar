import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import dts from 'rollup-plugin-dts';

import packageJson from "./package.json";

// eslint-disable-next-line import/no-anonymous-default-export
const config = [
    {
        input:   "./src/index.ts",
        output:  [
            {
                file:      packageJson.main,
                format:    "cjs",
                sourcemap: true
            },
            {
                file:      packageJson.module,
                format:    "esm",
                sourcemap: true
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript(),
            json(),
        ]
    },
    {
        input:   'build/dts/index.d.ts',
        output:  [{ file: packageJson.types, format: 'es' }],
        plugins: [dts(),]
    }
];

export default config;
