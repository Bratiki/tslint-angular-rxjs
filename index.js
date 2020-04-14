module.exports = {
  "rulesDirectory": [
    "rxjs-tslint"
  ],
  "extends": [
    // Todo: Refuse to use `tslint-config-airbnb` package because it is deprecated
    "tslint-config-airbnb",
    "codelyzer",
    "tslint-import-group-ordering",
    "rxjs-tslint",
    "tslint-consistent-codestyle"
  ],
  "rules": {
    // rxjs-tslint rules
    "rxjs-collapse-imports": true,
    "rxjs-pipeable-operators-only": true,
    "rxjs-no-static-observable-methods": true,
    "rxjs-proper-imports": true,
    // default tslint rules (airbnb is just present of default tslint rules)
    "arrow-return-shorthand": true,
    "callable-types": true,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": true,
    "eofline": true,
    "forin": true,
    "import-blacklist": [
      true,
      "rxjs/Rx",
      "rxjs/internal"
    ],
    "import-spacing": true,
    "indent": [
      true,
      "spaces"
    ],
    "interface-over-type-literal": true,
    "label-position": true,
    "max-line-length": [true, {"limit": 140, "ignore-pattern": "^import |^export {(.*?)}|class [a-zA-Z]+ implements |// "}],
    "member-access": {"severity": "warning", "options":["no-public"]},
    "member-ordering": [
      true,
      {
        "order": [
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "protected-static-method",
          "private-static-field",
          "private-static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-empty": {"severity": "warning"},
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-misused-new": true,
    "no-non-null-assertion": true,
    "no-redundant-jsdoc": true,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unnecessary-initializer": true,
    "no-unused-expression": true,
    "no-var-keyword": true,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-whitespace"
    ],
    "prefer-const": true,
    "quotemark": [
      true,
      "single"
    ],
    "radix": true,
    "semicolon": [
      true,
      "always"
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "unified-signatures": true,
    "variable-name": {"severity": "warning", "options": ["ban-keywords"]},
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],
    // codelyzer rules
    "no-output-on-prefix": {"severity": "warning"},
    "no-inputs-metadata-property": true,
    "no-outputs-metadata-property": true,
    "no-host-metadata-property": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": {"severity": "warning", "options": ["Component"]},
    "directive-class-suffix": true,
    "object-curly-spacing": [true, "always"],
    "array-bracket-spacing": [true, "never"],
    "space-in-parens": [true, "never"],

    // New tslint rules
    "no-else-after-return": false,
    "unnecessary-else": false,
    "ter-prefer-arrow-callback": {"severity": "warning"},
    "prefer-template": {"severity": "warning"},
    "ter-indent": false,
    "ter-arrow-parens": {"severity": "warning"},
    "object-shorthand-properties-first": {"severity": "warning"},
    "prefer-array-literal": {"severity": "warning"},
    "no-attribute-decorator": {"severity": "warning"},
    "no-conflicting-lifecycle": {"severity": "warning"},
    "no-async-without-await": {"severity": "warning"},
    "no-unnecessary-callback-wrapper": false,
    "no-return-await": {"severity": "warning"},
    "no-floating-promises": {"severity": "warning"},
    "no-increment-decrement": false,
    "no-implicit-dependencies": false,
    "no-boolean-literal-compare": {"severity": "warning"},
    "no-require-imports": {"severity": "warning"},
    "no-duplicate-imports": {"severity": "warning"},
    "no-default-import": {"severity": "warning"},
    "no-default-export": false,
    "no-reference": {"severity": "warning"},
    "no-sparse-arrays": {"severity": "warning"},
    "no-parameter-reassignment": {"severity": "warning"},
    "no-void-expression": false,
    "no-lifecycle-call": {"severity": "warning"},
    "no-output-native": {"severity": "warning"},
    "static-this": {"severity": "warning"},
    "no-this-assignment": {"severity": "warning"},
    "prefer-readonly": {"severity": "warning"},
    "new-parens": {"severity": "warning"},
    "prefer-method-signature": {"severity": "warning"},
    "function-constructor": {"severity": "warning"},
    "return-undefined": {"severity": "warning"},
    "only-arrow-functions": {"severity": "warning"},
    "arrow-parens": false,
    "unnecessary-bind": {"severity": "warning"},
    "promise-function-async": {"severity": "warning"},
    "await-promise": {"severity": "warning"},
    "no-promise-as-boolean": {"severity": "warning"},
    "one-variable-per-declaration": {"severity": "warning"},
    "function-name": false,
    "no-any": {"severity": "warning"},
    "no-pipe-impure": {"severity": "warning"},
    "no-queries-metadata-property": {"severity": "warning"},
    "no-unused-css": {"severity": "warning"},
    "prefer-inline-decorator": {"severity": "warning"},
    "prefer-output-readonly": {"severity": "warning"},
    "template-banana-in-box": {"severity": "warning"},
    "template-cyclomatic-complexity": false,
    "template-i18n": false,
    "template-no-negated-async": false,
    "template-use-track-by-function": false,
    "use-component-selector": {"severity": "warning"},
    "contextual-lifecycle": {"severity": "warning"},
    "use-component-view-encapsulation": {"severity": "warning"},
    "component-max-inline-declarations": {"severity": "warning"},
    "template-conditional-complexity": {"severity": "warning", "options": [4]},
    "no-invalid-this": {
      "severity": "warning",
      "options": ["check-function-in-method"]
    },
    "unnecessary-constructor": {
      "severity": "warning",
      "options": [{"check-super-calls": true}]
    },
    "invalid-void": {
      "severity": "warning",
      "options": [{"allow-generics": ["EventEmitter", "Promise", "Observable"]}]
    },
    "no-duplicate-variable": {
      "severity": "warning",
      "options": ["check-parameters"]
    },
    "directive-selector": {
      "severity": "warning",
      "options": ["attribute", ["bl"], "camelCase"]
    },
    "component-selector": {
      "severity": "warning",
      "options": ["element", ["bl"], "kebab-case"]
    },
    "no-unnecessary-class": {
      "severity": "warning",
      "options": ["allow-constructor-only", "allow-static-only", "allow-empty-class"]
    },
    "prefer-function-over-method": {
      "severity": "warning",
      "options": ["allow-public", "allow-protected"]
    },
    "align": {
      "severity": "warning",
      "options": ["parameters", "statements"]
    },
    "typedef": {
      "severity": "warning",
      "options": ["parameter", "call-signature", "property-declaration"]
    },
    "comment-type": {
      "severity": "warning",
      "options": ["singleline", "multiline", "doc"]
    },
    // tslint-import-group-ordering rules
    "import-group-ordering": {
      "severity": "warning",
      "options": {
        "imports-groups": [
          {"name": "@angular"},
          {"name": "@ngrx"},
          {"name": "@env"},
          {"name": "rxjs"},
          {"name": "dependencies"},
          {"name": "core-store"},
          {"name": "actions"},
          {"name": "effects"},
          {"name": "reducers"},
          {"name": "selectors"},
          {"name": "pages"},
          {"name": "containers"},
          {"name": "components"},
          {"name": "services"},
          {"name": "guards"},
          {"name": "interfaces"},
          {"name": "constants"},
          {"name": "shared"},
          {"name": "other"}
        ],
        "matching-rules": [
          {"type": "project", "matches": "^(@angular)", "imports-group": "@angular"},
          {"type": "project", "matches": "^(@ngrx)", "imports-group": "@ngrx"},
          {"type": "project", "matches": "^(@env)", "imports-group": "@env"},
          {"type": "project", "matches": "^(rxjs)", "imports-group": "rxjs"},
          {"type": "dependencies", "imports-group": "dependencies", "disable-native-nodejs-modules": true, "from-package.json": true},
          {"type": "project", "matches": "(core\/store)", "imports-group": "core-store"},
          {"type": "project", "matches": "(actions\/)", "imports-group": "actions"},
          {"type": "project", "matches": "(effects\/)", "imports-group": "effects"},
          {"type": "project", "matches": "(reducers\/)", "imports-group": "reducers"},
          {"type": "project", "matches": "(selectors\/)", "imports-group": "selectors"},
          {"type": "project", "matches": "(pages\/)", "imports-group": "pages"},
          {"type": "project", "matches": "(containers\/)", "imports-group": "containers"},
          {"type": "project", "matches": "(components\/)", "imports-group": "components"},
          {"type": "project", "matches": "(services\/)", "imports-group": "services"},
          {"type": "project", "matches": "(guards\/)", "imports-group": "guards"},
          {"type": "project", "matches": "(interfaces\/)", "imports-group": "interfaces"},
          {"type": "project", "matches": "(constants\/)", "imports-group": "constants"},
          {"type": "project", "matches": "(shared\/)", "imports-group": "shared"},
          {"type": "project", "matches": ".*", "imports-group": "other"}
        ]
      }
    },
    //"tslint-consistent-codestyle" rules
    "naming-convention": {
      "severity": "warning",
      "options": [
        // forbid leading and trailing underscores and enforce camelCase on EVERY name. will be overridden by subtypes if needed
        {"type": "default", "format": "camelCase", "leadingUnderscore": "forbid", "trailingUnderscore": "forbid"},
        // require all global constants to be camelCase or UPPER_CASE
        // all other variables and functions still need to be camelCase
        {"type": "variable", "modifiers": ["const"], "format": ["camelCase", "UPPER_CASE"]},
        // require exported constant variables that are initialized with functions to be camelCase
        {"type": "functionVariable", "modifiers": ["export", "const"], "format": "camelCase"},
        // allow leading underscores for unused parameters, because `tsc --noUnusedParameters` will not flag underscore prefixed parameters
        // all other rules (trailingUnderscore: forbid, format: camelCase) still apply
        {"type": "parameter", "modifiers": "unused", "format": ["camelCase", "PascalCase"], "leadingUnderscore": "allow"},
        // require leading underscores for private properties and methods, all other rules still apply
        {"type": "member", "modifiers": "private", "leadingUnderscore": "require"},
        // same for protected
        {"type": "member", "modifiers": "protected", "leadingUnderscore": "require"},
        // exclicitly disable the format check only for method toJSON
        {"type": "method", "filter": "^toJSON$", "format": null},
        // enforce UPPER_CASE for all public static readonly(!) properties
        {"type": "property", "modifiers": ["public", "static", "const"], "format": "UPPER_CASE"},
        // UPPER_CASE for enums
        {"type": "enum", "format": "UPPER_CASE"},
        // enforce PascalCase for classes, interfaces, etc. Remember, there are still no underscores allowed.
        {"type": "type", "format": "PascalCase"},
        // abstract classes must have the prefix "Abstract". The following part of the name must be valid PascalCase
        {"type": "class", "modifiers": "abstract", "prefix": "Abstract"},
        // interface names must start with "I". The following part of the name must be valid PascalCase
        {"type": "interface", "prefix": "I"}
      ]
    }
  }
};
