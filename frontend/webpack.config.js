const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack')

module.exports = () =>{
    const eFile = `.env.${process.env.NODE_ENV}`;
    console.log('@@@@@@@@ ' + process.env.NODE_ENV);
    return {
        entry: './src/index.jsx',
        output: {
            filename: 'main.bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: "/"
        },
        devServer: {
            port: 3000,
            open: true,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.jsx?$/,
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

            new Dotenv({
                path: eFile,
                defaults: '.env.defaults',
            })
        ],
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
    };
}

