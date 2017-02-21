
import { resolve } from 'path';
import webpack from 'webpack';

const { env } = process;

process.env.NODE_ENV = env.NODE_ENV || 'development';

const isTesting = !!env.ANIMATED_TEST;
const PROJECT_PATH = __dirname;
const inProject = (...args) => resolve(PROJECT_PATH, ...args);
const inSrc = inProject.bind(null, 'src');
const srcDir = inSrc();

export default {
	output: {
		library: 'Animated',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [srcDir, inProject('test')],
				loader: 'babel',
				query: {
					presets: [
						['es2015', { modules: false }],
						'stage-0',
						'react',
					],
					plugins: [
						'lodash',
						'transform-remove-strict-mode',
					],
					cacheDirectory: true,
					babelrc: false,
				},
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
	],
	resolve: {
		modules: [srcDir, 'node_modules'],
		extensions: ['.js'],
		alias: { React: 'react' },
	},
	devtool: 'source-map',
	externals: isTesting ? {} : {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
};
