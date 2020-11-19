module.exports = {
  types: [
    { value: "feat", name: "feat:     一个新的特性" },
    { value: "fix", name: "fix:      修复一个Bug" },
    { value: "docs", name: "docs:     变更的只有文档" },
    {
      value: "style",
      name:
        "style:    不影响代码含义的更改\n            (white-space, formatting, missing semi-colons, etc)",
    },
    {
      value: "refactor",
      name: "refactor: 代码重构，注意和feat,fix区分",
    },
    {
      value: "perf",
      name: "perf:     提升性能",
    },
    { value: "test", name: "test:     添加一个测试" },
    {
      value: "chore",
      name: "chore:    开发工具变动\n            (构建, 脚手架工具, 等",
    },
    { value: "revert", name: "revert:   代码回滚" },
    { value: "WIP", name: "WIP:      Work in progress" },
  ],

  scopes: [{ name: "pages" }, { name: "components" }, { name: "others" }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body:
      'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },

  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body"],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
