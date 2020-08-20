module.exports = {
  devServer: {
    // 运行时，自动开启浏览器
    open: true,
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);

},
}
