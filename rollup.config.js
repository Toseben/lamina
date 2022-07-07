import path from 'path'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

const root = process.platform === 'win32' ? path.resolve('/') : '/'
const external = (id) => !id.startsWith('.') && !id.startsWith(root)
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json']

const getBabelOptions = ({ useESModules }) => ({
  babelrc: false,
  extensions,
  exclude: '**/node_modules/**',
  babelHelpers: 'runtime',
  presets: [
    [
      '@babel/preset-env',
      {
        include: [
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-numeric-separator',
          '@babel/plugin-proposal-logical-assignment-operators',
        ],
        bugfixes: true,
        loose: true,
        modules: false,
        targets: '> 1%, not dead, not ie 11, not op_mini all',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [['@babel/transform-runtime', { regenerator: false, useESModules }]],
})

export default [
  {
    input: `./src/index.tsx`,
    output: { file: `dist/index.js`, format: 'esm' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), resolve({ extensions })],
  },
  {
    input: `./src/index.tsx`,
    output: { file: `dist/index.cjs.js`, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), resolve({ extensions })],
  },
  {
    input: `./src/vanilla.ts`,
    output: { file: `dist/vanilla.js`, format: 'esm' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), resolve({ extensions })],
  },
  {
    input: `./src/vanilla.ts`,
    output: { file: `dist/vanilla.cjs.js`, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), resolve({ extensions })],
  },
  {
    input: `./src/types.ts`,
    output: { file: `dist/types.js`, format: 'esm' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), resolve({ extensions })],
  },
  {
    input: `./src/types.ts`,
    output: { file: `dist/types.cjs.js`, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), resolve({ extensions })],
  },
  {
    input: `./src/chunks/BlendModes.ts`,
    output: { file: `dist/chunks/BlendModes.js`, format: 'esm' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), resolve({ extensions })],
  },
  {
    input: `./src/chunks/BlendModes.ts`,
    output: { file: `dist/chunks/BlendModes.cjs.js`, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), resolve({ extensions })],
  },
  {
    input: `./src/chunks/Helpers.ts`,
    output: { file: `dist/chunks/Helpers.js`, format: 'esm' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), resolve({ extensions })],
  },
  {
    input: `./src/chunks/Helpers.ts`,
    output: { file: `dist/chunks/Helpers.cjs.js`, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), resolve({ extensions })],
  },
  {
    input: `./src/chunks/Noise.ts`,
    output: { file: `dist/chunks/Noise.js`, format: 'esm' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), resolve({ extensions })],
  },
  {
    input: `./src/chunks/Noise.ts`,
    output: { file: `dist/chunks/Noise.cjs.js`, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), resolve({ extensions })],
  },
]
