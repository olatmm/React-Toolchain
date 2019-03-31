const HtmlWebPackPlugin =  require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports ={
    module:{
        rules:[
            {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: { loader: 'barbel-loader'}
            }
        ]
    },
    mode: 'development',
    devServer:{
        historyApiFailback: true,
        compress:true,
        port: 3030,
        open: true
    },
    plugins:[
        HtmlWebpackPluginConfig
    ]
};