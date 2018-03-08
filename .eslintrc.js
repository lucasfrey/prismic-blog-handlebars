module.exports = {
  "rules": {
    "indent": [2, 2,
      {"VariableDeclarator": { "var": 2, "let": 2, "const": 3}}
    ],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "no-console": 0
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended"
};
