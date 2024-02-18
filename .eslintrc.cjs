module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    './.eslintrc-auto-import.json'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    // 取消驼峰命名规则
    'vue/multi-word-component-names': 0,
    // 自动引入检查
    'no-undef': 1,
    // 未使用的变量警告提示
    'no-unused-vars': 1,
    // 缩进为2个space
    'indent': [
      'error',
      2
    ],
    // 关闭换行符检查
    'linebreak-style': [
      'off',
      'windows'
    ],
    // 使用单引号
    'quotes': [
      'error',
      'single'
    ],
    // 结尾使用分号
    'semi': [
      'error',
      'always'
    ]
  }
};
