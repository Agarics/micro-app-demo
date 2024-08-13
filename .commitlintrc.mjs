export default {
  extends: ['cz'],
  rules: {
    'subject-empty': [0, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert',
        'chore',
        'wip',
        'workflow',
        'types',
      ],
    ],
  },
};
