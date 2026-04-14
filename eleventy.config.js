module.exports = function(eleventyConfig) {
  // Pass through images and admin folder
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data"
    }
  };
};
