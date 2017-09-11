/**
 * Created by Administrator on 9/8 0008.
 */
/*module.exports = {
    entry:  __dirname + "/app/main.js",//�Ѷ���ἰ��Ψһ����ļ�
    output: {
        path: __dirname + "/public",//�������ļ���ŵĵط�
        filename: "bundle.js"//���������ļ����ļ���
    }
}*/
//ע����__dirname����node.js�е�һ��ȫ�ֱ�������ָ��ǰִ�нű����ڵ�Ŀ¼��
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + "/app/main.js",//唯一入口文件   “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    //通过简单的配置，webpack就可以在打包时为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试
    devtool: "eval-source-map",
    //使用webpack构建本地服务器  npm install --save-dev webpack-dev-server
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true,//热加载
        port: 8088//端口号
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,//一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
                use: {
                    loader: "babel-loader"//loader的名称（必须）
                },
                exclude: /node_modules/,//屏蔽不需要处理的文件
                include:'' //手动添加必须处理的文件
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.temp.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
