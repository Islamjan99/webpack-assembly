const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		filename: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name][contenthash].js',
		assetModuleFilename: '[name][ext]',
		clean: true,
	},
	performance: {
		hints: false,
		maxAssetSize: 512000,
		maxEntrypointSize: 512000,
	},
	devServer: {
		port: 9000,
		compress: true,
		hot: true,
		static: {
			directory: path.join(__dirname, 'public'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(scss|sass|less|).$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'My web page',
			filename: 'index.html',
			template: 'src/index.html',
		}),
	],
}
