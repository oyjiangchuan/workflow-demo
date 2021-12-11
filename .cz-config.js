'use strict'
module.exports = {
  types: [
    { value: ':sparkles: feat', name: '✨ 特性 | 一个新的特性' },
    { value: ':bug: fix', name: '🐛 修复 | 修复一个Bug' },
    { value: ':tada: init', name: '🎉 Init | 初始化' },
    { value: ':memo: docs', name: '📝 文档 | 文档' },
    { value: ':lipstick: style', name: '💄 样式 | 样式' },
    { value: ':recycle: refactor', name: '♻️  重构 | 代码重构' },
    { value: ':zap: perf', name: '⚡️ 性能 | 性能优化' },
    { value: ':white_check_mark: test', name: '✅ 测试 | 添加测试' },
    { value: ':rocket: chore', name: '🚀 工具 | 构建/工程依赖/工具' },
    { value: ':rewind: revert', name: '⏪ 回滚 | 代码回退' },
    { value: ':package: build', name: '📦‍ 打包 | 打包构建' },
    { value: ':construction_worker: ci', name: '👷 CI | CI 配置' }
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue 例如：#31, #34(可选)',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 当提交类型为feat、fix时才有破坏性修改选项
  subjectLimit: 100
}
