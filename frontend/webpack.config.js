const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const DotenvPlugin = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const eFile = `.env.${process.env.NODE_ENV}`;
require('dotenv').config({
    path:`./${eFile}`
});

module.exports = () =>{
   const HOST = process.env.SERVER_HOST;
        console.log('#HOST: ' + HOST);
        console.log('@@_env_@@ ' + process.env.NODE_ENV);
    return {
        entry: './src/index.tsx',
        output: {
            filename: 'main.bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: "/"
        },
        devServer: {
            proxy:{
                '*' : {
                    target: HOST,
                    secure: false,
                }
            },
            port: 3000,
            open: true,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$|jsx/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css?$/,
                    include: [
                        path.resolve(__dirname, 'src/modules/main')
                    ],
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },

            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
            }),
            new CopyPlugin({
                patterns: [
                    {from: "public/static", to: "static"},
                ],
            }),

            new DotenvPlugin({
                path: eFile,
                defaults: '.env.defaults',
            }),
            new BundleAnalyzerPlugin(),

        ],
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
    };
}

