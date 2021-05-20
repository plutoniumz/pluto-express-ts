const { resolve } = require('path')

module.exports = {
    target: 'node',
    mode: 'production',
    ignoreWarnings: [/critical dependency:/i],
    entry: {
        index: './src/PlutoExpress.ts',
        utils: './src/utils.ts'
    },
    performance: {
        hints: false
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, './build'),
        library: {
            type: 'umd'
        }
    },
    resolve: {
    // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        modules: [`${global}/node_modules`, 'node_modules']
    },
    module: {
        rules: [
            {
                // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    }
}
