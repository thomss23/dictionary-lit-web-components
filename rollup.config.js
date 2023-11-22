// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import image from 'rollup-plugin-img'; // Change the import to rollup-plugin-img
import copy from 'rollup-plugin-copy';

export default {
  input: 'app-container.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({ 'Reflect.decorate': 'undefined' }),
    resolve(),
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    image(), // Change this line to use rollup-plugin-img
    copy({
      targets: [
        { src: 'assets/images', dest: 'dist/assets' },
        // Add other targets if needed
      ],
    }),
  ],
};
