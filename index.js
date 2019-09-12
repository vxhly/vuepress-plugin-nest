const {
  resolve
} = require('path')

module.exports = (options = {}, context) => ({
  define() {
    const {
      color = '0,0,0', pointColor = '0,0,0', opacity = 0.5, count = 99, zIndex = -1
    } = options

    return {
      COLOR: color,
      POINT_COLOR: pointColor,
      OPACITY: opacity,
      COUNT: count,
      Z_INDEX: zIndex
    }
  },

  enhanceAppFiles: resolve(__dirname, "enhanceAppFile.js"),
  globalUIComponents: "Nest"
});
