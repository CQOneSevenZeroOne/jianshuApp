const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name]-[hash]",
		path: path.resolve(__dirname, 'public')
	},
	devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|jpg|gif|jpeg)$/,
			use: 'url-loader'
		}, {
			test: /\.scss$/,
			loaders: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		}, {
			test: /\.js[x]?$/,
			// 除了了node_modules|bower_components文件夹之外的都转换
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react']
				}
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './template/index.html'
		}),
		new ExtractTextPlugin('index.css')
	],
	devServer: {
		contentBase: './public',
		inline: true,
		port: 3366
	},
	watch: true,
}