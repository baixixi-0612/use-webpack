 //导入包   
 const HtmlWebpackPlugin = require("html-webpack-plugin");
 //这里相当与复制一个首页放在内存中
 const htmlPlugin = new HtmlWebpackPlugin({
     //设置生成预览页面的模板文件
     template: "./src/index.html",
     //设置生成的预览页面名称
     filename: "index.html"
 })
 const path = require("path");
 module.exports = {
     mode: "development",
     //设置入口文件路径
     entry: path.join(__dirname, "./src/"),
     //设置出口文件
     output: {
         //设置路径
         path: path.join(__dirname, "./dist"),
         //设置文件名
         filename: "bundle.js"
     },
     //插件目录
     plugins: [htmlPlugin]
 }