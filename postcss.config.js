/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require("tailwindcss");
const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [postcssImport(), tailwindcss(), autoprefixer()],
};
