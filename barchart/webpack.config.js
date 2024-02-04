const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 1001
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'somethingElse',
            filename: 'remoteEntry.js',
            exposes: {
                './BarChartIndex': './src/index'
            }
        }),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        )
    ]
};

/**
config file for webpack

mvqt? 

*/
