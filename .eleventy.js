module.exports = function(eleventyConfig) {
  // 文字数カウント用フィルター
  eleventyConfig.addFilter("wordCount", (content) => {
    if (!content) 
      return 0;
    const cleanContent = content.toString()
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/\s+/g, "");
    return cleanContent.length;
  });

	eleventyConfig.addPassthroughCopy("src/_assets/image");
  eleventyConfig.addPassthroughCopy("src/_assets/javascript");
	eleventyConfig.addPassthroughCopy("src/_css");

  return {
    dir: {
      input: "src", 
      output: "public"
    }
  };
};