'use strict'
/*vue 的规则配置*/
const utils = require('./utils')//导入utils的Css配置
const config = require('../config')//导入config下面的index.js的配置

const isProduction = process.env.NODE_ENV === 'production'
//是否启用sourcemap
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap
//
module.exports = {
  /*导出util下面的css样式配置*/
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  //是否启用sourcemap
  cssSourceMap: sourceMapEnabled,
  //对缓存的处理的导出
  cacheBusting: config.dev.cacheBusting,
    /*vue-loader 是处理 *.vue 文件的 webpack loader。它本身提供了丰富的 API，有些 API 很实用但很少被人熟知。
     *例如接下来要介绍的 preserveWhitespace 和 transformToRequire
     * preserveWhitespace 减少文件体积：它的作用是阻止元素间生成空白内容，在 Vue 模板编译后使用 _v(" ") 表示。
     * 如果项目中模板内容多的话，它们还是会占用一些文件体积的。例如 Element 配置该属性后，未压缩情况下文件体积减少了近 30Kb
     * transformToRequire: 使用 transformToRequire 再也不用把图片写成变量了
     * 比如：路径时个变量<avatar :default-src="DEFAULT_AVATAR"></avatar>
     * 其实通过配置 transformToRequire 后，就可以直接配置，这样vue-loader会把对应的属性自动 require 之后传给组件
     * <avatar default-src="./assets/default-avatar.png"></avatar>
     * */
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
