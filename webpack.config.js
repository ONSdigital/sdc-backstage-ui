var webpack = require('webpack');

module.exports = {
	entry: {
		app: ['./app/app.jsx', 'webpack/hot/dev-server']
	},
	output: {
		path: __dirname + '/build/',
		publicPath: "/dist/",
		filename: 'site.min.js'
	},
	devServer: {
		hot: true,
		inline: true,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				//tell webpack to use jsx-loader for all *.jsx files
				test: /\.jsx$/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			}
		]
	},
	plugins: [
		//new webpack.HotModuleReplacementPlugin()
	]
};
