/**
 * heycli配置文件
 */

const path = require('path');

module.exports = {
  port: 9012,                                                                //端口号
  root: 'dist',                                                              //生成文件的根目录
  clean: true,                                                               //打包之前清空dist目录
  stat: false,                                                               //是否生成stat.json
  webpack: {
    console: true,                                                           //打包压缩是否保留console
    publicPath: '/',                                                         //主路径
    output: {                                                                //输出哪些文件，主要是html，默认会加载和html文件名一样的js文件为入口
      './index.html': {
        entry: './src/app'
      }
    },
    alias: {                                                                 //定义别名
      model: './src/js/model/',
      js: './src/js/',
      css: './src/css',
      images: './src/images',
      components: './src/components/'
    },
    global: {                                                                //定义全局变量
      Utils: [path.resolve(__dirname, 'src/js/common/utils'), 'default'],    //Utils工具库：操作cookie和localstorage、类型判断等
      Manba: 'manba',                                                        //日期时间工具库
      HeyUI: 'heyui',                                                        //heyui样式库
      Model: 'js-model',                                                     //js-model模型库
      G: 'hey-global',                                                       //全局变量库
      log: 'hey-log',                                                        //日志库
      R: [path.resolve(__dirname, 'src/js/common/request'), 'default'],      //前端资源路径

      //自定义全局变量
      Website: [path.resolve(__dirname, 'src/js/config/website-config.js'), 'default'], //网站配置项(标题、学校名称等)
    },
    devServer: {                                                             //定义反向代理服务器
      proxy: {
        // 此处应该配置为开发服务器的后台地址
        // '/api': {
        //   target: 'http://xxx.xx.xx'
        // }
      },
      historyApiFallback: true
    },
    globalVars: './src/css/var.less',                                        //定义全局变量
    externals: {}
  },
  copy: ['static/images/*', 'call/*']      //未做关联引用的文件在build的时候复制到打包的文件夹中
};
