const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMessages = require('webpack-messages');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.bundle.js',
	},
	mode: process.env.NODE_ENV || 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		plugins: [new TsconfigPathsPlugin({})],
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		port: 3000,
		host: '192.168.0.160',
	},
	module: {
		rules: [
			{
				test: /\.(glb)$/,
				use: [{ loader: 'gltf-webpack-loader' }],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
		}),
		new WebpackMessages({
			name: 'client',
			logger: (str) => console.log(`>> ${str}`),
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: path.resolve(__dirname, './static') }],
		}),
	],
};
