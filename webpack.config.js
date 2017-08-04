var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production';

var config = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css)$/,
                use: ExtractTextPlugin.extract('style-loader!css-loader')
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract('style-loader!css-loader!postcss-loader!sass-loader')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'vue-html-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: [
                        'url-loader?limit=4096&name=[path][name].[ext]?[chunkhash]',
                        'image-webpack-loader'
                     ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: "file-loader",
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                include: [path.join(__dirname, 'src')],
                options: {
                    formatter: require('eslint-friendly-formatter')//错误输出格式
                }
            }
        ]
    },
    resolve: {
        alias: {
            'src': path.join(__dirname, './src'),
            'css': path.join(__dirname, './src/css'),
            'assets': path.join(__dirname, './src/assets'),
            'components': path.join(__dirname, './src/components'),
            'constants': path.join(__dirname, './src/constants'),
            'directives': path.join(__dirname, './src/directives'),
            'filters': path.join(__dirname, './src/filters'),
            'utils': path.join(__dirname, './src/utils'),
            'views': path.join(__dirname, './src/views'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => (
                resource &&
                resource.indexOf('node_modules') >= 0 &&
                resource.match(/\.js$/)
            )
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            inject: true,
            minify: {
                minifyJS: true,
                removeComments: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true
            }
        })
    ],
    devServer: {
        // 主入口为 /src/index.html
        contentBase: './src',
        historyApiFallback: true, //不跳转
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (isProd) {
    config.devtool = '#source-map';
    //把vue中内联的css拆出来，以外联引用
    config.module.rules[0].options = {
        loaders: {
            sass: ExtractTextPlugin.extract({
              use: ['css-loader','sass-loader'],
              fallback: 'vue-style-loader'
            }),
        }
    };

    // http://vue-loader.vuejs.org/en/workflow/production.html
    config.plugins = (config.plugins || []).concat([
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'src/assets'),
                to: path.join(__dirname, 'dist/assets')
            }
        ]),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // 启用作用域提升
        new webpack.optimize.ModuleConcatenationPlugin()
    ]);
}

module.exports = config;
