module.exports = {
  allowBreakingChanges: [],

  allowCustomScopes: true,
  // override the messages, defaults are as follows
  messages: {
    confirmCommit: '是否提交或修改commit ?',
    subject: '填写简短精炼的变更描述 :\n',
    type: '选择你要提交的类型 :',
  },

  scopes: [],
  // skip any questions you want
  skipQuestions: ['scope', 'body', 'footer'],
  // limit subject length
  subjectLimit: 100,
  types: [
    { name: 'feat:     新增功能', value: 'feat' },
    { name: 'fix:      修复缺陷', value: 'fix' },
    { name: 'docs:     文档变更', value: 'docs' },
    { name: 'style:    代码格式', value: 'style' },
    { name: 'refactor: 代码重构', value: 'refactor' },
    { name: 'perf:     性能优化', value: 'perf' },
    { name: 'test:     添加疏漏测试或已有测试改动', value: 'test' },
    {
      name: 'build:    构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)',
      value: 'build',
    },
    { name: 'ci:       修改 CI 配置、脚本', value: 'ci' },
    { name: 'revert:   回滚 commit', value: 'revert' },
    {
      name: 'chore:    对构建过程或辅助工具和库的更改 (不影响源文件、测试用例)',
      value: 'chore',
    },
    { name: 'wip:      正在开发中', value: 'wip' },
    { name: 'workflow: 工作流程改进', value: 'workflow' },
    { name: 'types:    类型定义文件修改', value: 'types' },
  ],
};
