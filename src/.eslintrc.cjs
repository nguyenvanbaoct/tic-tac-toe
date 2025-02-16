/* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path')
module.exports = {
  extends: [
    // Apply default rules from the installed plugins.
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    // Disable rules that conflict with Prettier.
    // Place this at the bottom to override the rules above!
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      // ESLint-plugin-react to automatically detect the version of React.
      version: 'detect'
    },
    // ESLint how to handle imports
    'import/resolver': {
      node: {
        // paths: [path.resolve(__dirname)],
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    node: true
  },
  rules: {
    // Disable the rule requiring React import in JSX files
    'react/react-in-jsx-scope': 'off',
    // Warn when <a target='_blank'> is used without rel="noreferrer"
    'react/jsx-no-target-blank': 'warn',
    // Override default Prettier rules (copied from .prettierrc)
    'react/prop-types': 'off',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
