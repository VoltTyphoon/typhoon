module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("static");
  // Eleventy configuration
  return {
    dir: {
      input: ".",             // source files root
      includes: "layouts",    // layouts/ directory for templates
      data: "data",           // data/ directory for global data files
      output: "_site"         // output directory
    }
  };
};
