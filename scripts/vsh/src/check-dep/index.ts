import type { CAC } from 'cac';

import { getPackages } from '@micro/node-utils';

import depcheck from 'depcheck';

async function runDepcheck() {
  const { packages } = await getPackages();
  await Promise.all(
    packages.map(async (pkg) => {
      if (
        [
          '@micro/eslint-config',
          '@micro/lint-staged-config',
          '@micro/node-utils',
          '@micro/prettier-config',
          '@micro/stylelint-config',
          '@micro/tailwind-config',
          '@micro/tsconfig',
          '@micro/vite-config',
          '@micro/vsh',
        ].includes(pkg.packageJson.name)
      ) {
        return;
      }

      const unused = await depcheck(pkg.dir, {
        ignoreMatches: [
          'vite',
          'vitest',
          'unbuild',
          '@micro/tsconfig',
          '@micro/vite-config',
          '@micro/tailwind-config',
          '@types/*',
          '@micro-core/design',
        ],
        ignorePatterns: ['dist', 'node_modules', 'public'],
      });

      // 删除file:前缀的依赖提示，该依赖是本地依赖
      Reflect.deleteProperty(unused.missing, 'file:');
      Object.keys(unused.missing).forEach((key) => {
        unused.missing[key] = (unused.missing[key] || []).filter(
          (item: string) => !item.startsWith('/'),
        );
        if (unused.missing[key].length === 0) {
          Reflect.deleteProperty(unused.missing, key);
        }
      });

      if (
        Object.keys(unused.missing).length === 0 &&
        unused.dependencies.length === 0 &&
        unused.devDependencies.length === 0
      ) {
        return;
      }
      console.error(
        '\n',
        pkg.packageJson.name,
        '\n missing:',
        unused.missing,
        '\n dependencies:',
        unused.dependencies,
        '\n devDependencies:',
        unused.devDependencies,
      );
    }),
  );
}

function defineDepcheckCommand(cac: CAC) {
  cac
    .command('check-dep')
    .usage(`Analysis of project circular dependencies.`)
    .action(async () => {
      await runDepcheck();
    });
}

export { defineDepcheckCommand };
