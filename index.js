const {
  resolve
} = require('path')

module.exports = (options = {}, context) => ({
  define() {
    const {
      color, 
      pointColor, 
      opacity, 
      count, 
      zIndex,
      showInMobile
    } = options

    return {
      COLOR: color || '0,0,0,',
      POINT_COLOR: pointColor || '0,0,0',
      OPACITY: opacity || 0.5,
      COUNT: count || 99,
      Z_INDEX: zIndex || -1,
      SHOW_IN_MOBILE: showInMobile || false
    }
  },

  enhanceAppFiles: resolve(__dirname, "./bin/enhanceAppFile.js"),
  globalUIComponents: "Nest"
});
