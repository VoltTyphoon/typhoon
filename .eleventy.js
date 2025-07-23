module.exports = function (eleventyConfig) {
  /* —— Passthrough —— */
  // 如果 static 在仓库根目录
  eleventyConfig.addPassthroughCopy("static");

  // 如果 static 在 src/static，则：
  // eleventyConfig.addPassthroughCopy({ "src/static": "static" });

  /* —— 其他配置保持原样 —— */
  return {
    dir: {
      input: ".",          // 如果你改成 "src"，就把上面路径改为 "src/static"
      output: "_site"
    }
  };
};
