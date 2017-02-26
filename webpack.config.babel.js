
import { resolve } from 'path';
import webpack from 'webpack';

const { env } = process;

const {
	NODE_ENV = 'development',
	ANIMATED_TEST,
} = process.env;

const isTesting = !!ANIMATED_TEST;
const isDev = NODE_ENV === 'development';

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
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
			'__DEV__': isDev,
		}),
	],
	resolve: {
		modules: [srcDir, 'node_modules'],
		extensions: ['.js'],
		alias: {
			React: 'react',
		},
	},
	devtool: 'source-map',
	externals: isTesting ? {} : {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
};
