module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/css": "css"});
  eleventyConfig.addPassthroughCopy({"src/js": "js"});
  eleventyConfig.addPassthroughCopy({"src/fonts": "fonts"});
  eleventyConfig.addPassthroughCopy({"src/images": "images"});
  eleventyConfig.addPassthroughCopy({"src/videos": "videos"});
  eleventyConfig.addPassthroughCopy({"src/documents": "documents"});
  eleventyConfig.addPassthroughCopy({"src/admin": "admin"});
  eleventyConfig.addCollection("projects", c =>
  c.getFilteredByGlob("src/content/projects/**/*.md")
);

  return {
    dir: { input: "src", output: "_site" }
  };
};
