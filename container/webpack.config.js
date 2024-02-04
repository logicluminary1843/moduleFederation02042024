const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 1000
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                barchart: 'barchart@http://localhost:1001/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        )
    ]
};

/*
Is it fair to say that barchart acts as a module for container, same way like other modules in node_module?

Yes, that's a fair statement. In the context of Webpack's Module Federation, barchart is acting as a remote module for the container application.
    The Module Federation Plugin allows a JavaScript application to dynamically load code from another bundle at runtime. This is similar to how modules in node_modules are imported and used in a Node.js application.
    However, there are some differences. Modules in node_modules are typically installed via npm and are included in the application bundle at build time. On the other hand, with Module Federation, barchart is a separate build that's hosted at http://localhost:1001/remoteEntry.js, and it's loaded dynamically at runtime.
    This allows for separate deployment and versioning of barchart, which can be beneficial in a microfrontend architecture.
*/

