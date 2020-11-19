import { Config } from '@stencil/core';
import { less } from '@stencil/less';
// import { postcss } from '@stencil/postcss';
// import { autoprefixer } from 'autoprefixer';
export const config: Config = {
  namespace: 'antd-stencil-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    less(),
    // postcss({
    //   plugins: [
    //     autoprefixer({
    //       browsers: ['last 6 versions'],
    //       cascade: false,
    //     }),
    //   ],
    // }),
  ],
};
