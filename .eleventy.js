const { inspect } = require("node:util");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("inspect", function (data, opts = {}) {
    return inspect(data, { depth:5, sorted: true, ...opts });
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
