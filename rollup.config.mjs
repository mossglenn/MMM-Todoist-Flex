// rollup.config.js
import ts from 'rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/main.ts',
	output: {
		file: 'bundle.js',
		format: 'cjs',
	},
	plugins: [ts(), resolve({extensions: ['.ts', '.mjs', '.js', '.json', '.node']})]
};