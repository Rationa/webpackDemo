const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader/dist");

module.exports = {
  // 指定为开发模式
  mode: "development",
  // 入口文件
  entry: {
    main: "./src/main.js"
  },
  // 出口文件
  output: {
    // 输出到ist文件夹(打包自动生成)
    path: path.resolve(__dirname, "dist"), // __dirname：表示当前文件的绝对路径(根目录)
    // 输出文件名在dist文件夹里的js文件夹chunk.js下
    filename: "js/chunk-[contenthash].js", // 使用由生成的内容产生的hash
    clean: true
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 选择模版
      template: "./public/index.html",
      // 打包以后的名称
      filename: "index.html",
      // js插入到body
      inject: "body"
    }),
    // new VueLoaderPlugin()
  ],
  // 
  module: {
    rules: [
      {
        test: /\.css$/, // 正则匹配css文件
        use: ["style-loader", "css-loader"] // 注意顺序！ 是从后往前加载的 (即先加载css-loader,再加载style-loader)
      },
      {
        test: /\.scss$/, // 正则匹配scss文件
        use: ["style-loader", "css-loader", "sass-loader", {
          // 部分css3属性需要通过postcss-loader和postcss-preset-env才能添加浏览器兼容性前缀，以确保在不同浏览器上的一致性
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                ["postcss-preset-env"]
              ]
            }
          }

        }] // 注意顺序！ 是从后往前加载的 (即先加载css-loader,再加载style-loader)
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|ico)$/, // 正则匹配图片文件
        type: "asset", // 使用asset模块
        generator: { // 生成文件
          // 输出文件名
          filename: "img/[name].[hash:6][ext]"
        },
        parser: { // 匹配图片大小
          dataUrlCondition: { // 图片大小小于10kb
            maxSize: 10 * 1024 // 10kb
          }
        }
      },
      {
        test: /\.js$/, // 正则匹配js文件
        loader: "babel-loader"
      },
      // {
      //   // 检测.vue 结尾的文件
      //   test: /\.vue$/,
      //   loader: "vue-loader"
      // }
    ]
  }
}