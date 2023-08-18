const HtmlWebpackPligin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "./src/main.jsx",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{loader: "babel-loader"}
            },
            {
                test: /\.html$/,
                use: [{loader: "html-loader"}]
            },
            {
                test: /\.css$/,
                use: ["style-loader" , "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader"]
            },
            
        ]
    },
    resolve:{
        extensions:[".js" , ".jsx"]
    },
    plugins:[
        new HtmlWebpackPligin({
            template: './public/'
        })
    ]
}