import type { Linter } from 'eslint';

const restrictedImportIgnores = [
  '**/vite.config.mts',
  '**/tailwind.config.mjs',
  '**/postcss.config.mjs',
];

const customConfig: Linter.Config[] = [
  {
    // apps内部的一些基础规则
    files: ['apps/**/**'],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['#/api/*'],
              message:
                'The #/api package cannot be imported, please use the @core package itself',
            },
            {
              group: ['#/layouts/*'],
              message:
                'The #/layouts package cannot be imported, please use the @core package itself',
            },
            {
              group: ['#/locales/*'],
              message:
                'The #/locales package cannot be imported, please use the @core package itself',
            },
            {
              group: ['#/stores/*'],
              message:
                'The #/stores package cannot be imported, please use the @core package itself',
            },
          ],
        },
      ],
    },
  },
  {
    // @core内部组件，不能引入@bim/* 里面的包
    files: ['packages/@core/**/**'],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@bim/*'],
              message:
                'The @core package cannot import the @bim package, please use the @core package itself',
            },
          ],
        },
      ],
    },
  },
  {
    // @core/shared内部组件，不能引入@bim/* 或者 @bim-core/* 里面的包
    files: ['packages/@core/base/**/**'],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@bim/*', '@bim-core/*'],
              message:
                'The @bim-core/shared package cannot import the @bim package, please use the @core/shared package itself',
            },
          ],
        },
      ],
    },
  },
  {
    // 不能引入@bim/*里面的包
    files: [
      'packages/types/**/**',
      'packages/utils/**/**',
      'packages/icons/**/**',
      'packages/constants/**/**',
      'packages/styles/**/**',
      'packages/stores/**/**',
      'packages/preferences/**/**',
      'packages/locales/**/**',
    ],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@bim/*'],
              message:
                'The @bim package cannot be imported, please use the @core package itself',
            },
          ],
        },
      ],
    },
  },
];

export { customConfig };