module.exports = {
  map: false,
  plugins: {
    autoprefixer: {
      cascade: false,
    },
    "postcss-import": {
      //TODO: add to tricks
      // This forces the use of Node's resolution logic which respects 'exports'
      resolve: (id, basedir) => {
        try {
          return require.resolve(id, { paths: [basedir] });
        } catch (e) {
          return id;
        }
      },
    },
    "postcss-nested": {},
  },
};
