const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin');
// const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // Styles
        styles: [
            './src/assets/styles/sass/home.scss',
            './src/assets/styles/sass/team.scss'
        ],
        // Scripts
        app: [
            './src/assets/js/home.js',
            './src/assets/js/team.js'
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ]
    },
    plugins: [
        // Limpa o diretório de saída ...
        new CleanWebpackPlugin(),
        // Configuração de template para a página inicial ...
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: {
                head: {
                    entry: './src/assets/js/home.js',
                    css: ' /src/assets/styles/sass/home.scss'
                }
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            base: 'team',
            filename: "team/index.html",
            template: './src/team/index.html',
            chunks: ['team'],
            hash: true
        }),
        new HtmlWebpackPlugin({
            base: 'about',
            filename: "about/index.html",
            template: './src/about/index.html'
        }),
        // Configuração para geração de favicon ...
        new FaviconWebpackPlugin({
            logo: './src/assets/favicon/brand.png',
            title: 'Webpack App',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        // Permite a inclusão de SVG inline por meio do arquivo
        // new HtmlWebpackInlineSVGPlugin()
    ]
};