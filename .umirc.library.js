export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'foo',
    globals: {
      react: 'React',
    },
  },
};
