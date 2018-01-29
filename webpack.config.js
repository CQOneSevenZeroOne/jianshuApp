const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./index.js",
	output: {
		filename: "[name]-[hash]",
		path: path.resolve(__dirname, 'public')
	},
	resolve: {
		alias: {
			vue: "vue/dist/vue.js",
			socketClient: "socket.io-client/dist/socket.io.js"
		}
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.vue$/,
			use: 'vue-loader'
		}, {
			test: /\.(png|jpg|gif|jpeg)$/,
			use: 'url-loader'
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
		})
	],
	devServer: {
		contentBase: './public',
		inline: true,
		port: 3366
	},
	watch: true,
}