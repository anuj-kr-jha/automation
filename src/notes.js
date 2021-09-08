/*
use eslint:

 ╭─evil@evil in repo: automation on  main [!?⇡1] is  v1.0.0 via  v14.17.4
 ╰─λ npx eslint src/*.js
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .

/home/evil/Desktop/automation/src/index.js
  2:1   error  Expected indentation of 2 spaces but found 4   indent
  3:1   error  Expected indentation of 4 spaces but found 8   indent
  3:16  error  Multiple spaces found before '+'               no-multi-spaces
  3:20  error  Trailing spaces not allowed                    no-trailing-spaces
  5:12  error  Strings must use singlequote                   quotes
  6:1   error  Expected indentation of 2 spaces but found 4   indent
  7:1   error  Extra semicolon                                semi
  7:2   error  Newline required at end of file but not found  eol-last

✖ 8 problems (8 errors, 0 warnings)
  8 errors and 0 warnings potentially fixable with the `--fix` option.

   ╭─evil@evil in repo: automation on  main [!?⇡1] is  v1.0.0 via  v14.17.4 took 1ms
 ╰─λ npx eslint src/*.js --fix

  ╭─evil@evil in repo: automation on  main [!?⇡1] is  v1.0.0 via  v14.17.4 took 650ms
 ╰─λ npx eslint src/*.js

 use prettier: for formattin:::::::::::::::::;
 npm i -D prettier-eslint prettier-eslint-cli
   uses:
    npx prettier-eslint 'src/*.js' --write

*/
