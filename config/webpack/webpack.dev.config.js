const webpack = require('webpack')
const WebpackOnBuildPlugin = require('on-build-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const prod = process.argv.indexOf('-p') !== -1;

// const testVar = JSON.stringify(blabla.apiDev);

if (process.env.NODE_ENV === 'production') {
    var onBuildReady = [path.join(__dirname, '../deploy.sh')];
    console.log('production')
} else {
    var onBuildReady = ['echo "dev build is ready"'];
    console.log('dev')
}

const config = {
    resolve: {
        modules: [
            // './../../node_modules'
            path.join(__dirname, '../../node_modules')
        ]
        // modulesDirectories: [path.resolve(__dirname, 'node_modules')]
    },
    entry: ['./source/main.js'],
    output: {
        path: path.join(__dirname, '../../dist/ad_examples'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    optimization: {
        minimize: true,
        // minimizer: [
        //     new UglifyJsPlugin({ /* config here */ })
        // ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                // TEST_VAR: prod ? this : that
            }
        }),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'test',
            hash: true,
            template: path.join(__dirname, '../../source/index.ejs'),
            author: {
                name: 'Alexey Kosenko',
                email: 'misterlexa123@gmail.com'
            },
            app: {
              name: 'bm3_test_setup'
            }
        }),
        new WebpackOnBuildPlugin(function(stats) {
            // console.log(stats);
        }),
        new WebpackShellPlugin({
            onBuildStart:['echo "Webpack Start"'],
            onBuildEnd: onBuildReady
        }),
        new CopyWebpackPlugin([
            {
                from: './source/static',
                to:'static'
            }
        ]),
    ]
}

module.exports = config
