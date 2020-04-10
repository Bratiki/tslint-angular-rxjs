module.exports = {
  "extends": [
    "tslint-config-airbnb",
    "codelyzer",
    "tslint-import-group-ordering",
    "rxjs-tslint",
    "tslint-consistent-codestyle"
  ],
  "rulesDirectory": [
    "rxjs-tslint"
  ],
  "rules": {
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
    "max-line-length": [
      true,
      140
    ],
    "member-access": false,
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-any": true,
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
    "no-empty": true,
    "no-empty-interface": true,
    "no-eval": true,
//    "no-inferrable-types": [
//      true,
//      "ignore-params"
//    ],
    "no-misused-new": true,
    "no-non-null-assertion": true,
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
    "typedef": [
      true,
      "call-signature",
      "arrow-call-signature",
      "parameter",
      "arrow-parameter",
      "property-declaration",
      "variable-declaration",
      "member-variable-declaration"
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
    "variable-name": {
      "options": [
        "ban-keywords",
        "check-format",
        "allow-leading-underscore"
      ]
    },
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],
    "object-curly-spacing": [true, "always"],
    "array-bracket-spacing": [true, "never"],
    "space-in-parens": [true, "never"],
    // codelyzer rules
    "component-class-suffix": [true, "Component"],
    "component-max-inline-declarations": true,
    "component-selector": [true, "element", ["bl"], "kebab-case"],
    "contextual-lifecycle": true,
    "directive-class-suffix": [true, "Directive"],
    "directive-selector": [true, "attribute", ["bl"], "camelCase"],
    "no-attribute-decorator": true,
    "no-conflicting-lifecycle": true,
    "no-forward-ref": true,
    "no-host-metadata-property": true,
    "no-input-rename": true,
    "no-inputs-metadata-property": true,
    "no-lifecycle-call": true,
    "no-output-native": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "no-outputs-metadata-property": true,
    "no-pipe-impure": true,
    "no-queries-metadata-property": true,
    "no-unused-css": true,
    "prefer-inline-decorator": true,
    "prefer-output-readonly": true,
    "template-banana-in-box": true,
    "template-conditional-complexity": [true, 4],
    "template-cyclomatic-complexity": [true, 5],
    "template-i18n": [true, "check-id", "check-text"],
    "template-no-negated-async": true,
    "template-use-track-by-function": true,
    "use-component-selector": true,
    "use-component-view-encapsulation": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true,
    // tslint-import-group-ordering rules
    "import-group-ordering": {
      "severity": "warning",
      "options": {
        "imports-groups": [
          {
            "name": "@angular"
          },
          {
            "name": "@ngrx"
          },
          {
            "name": "@env"
          },
          {
            "name": "rxjs"
          },
          {
            "name": "dependencies"
          },
          {
            "name": "other"
          }
        ],
        "matching-rules": [
          {
            "type": "project",
            "matches": "^(@angular)",
            "imports-group": "@angular"
          },
          {
            "type": "project",
            "matches": "^(@ngrx)",
            "imports-group": "@ngrx"
          },
          {
            "type": "project",
            "matches": "^(@env)",
            "imports-group": "@env"
          },
          {
            "type": "project",
            "matches": "^(rxjs)",
            "imports-group": "rxjs"
          },
          {
            "type": "dependencies",
            "imports-group": "dependencies",
            "disable-native-nodejs-modules": true,
            "from-package.json": true
          },
          {
            "type": "project",
            "matches": ".*",
            "imports-group": "other"
          }
        ]
      }
    },
    // rxjs-tslint rules
    "rxjs-collapse-imports": true,
    "rxjs-pipeable-operators-only": true,
    "rxjs-no-static-observable-methods": true,
    "rxjs-proper-imports": true,
    //"tslint-consistent-codestyle" rules
    "naming-convention": [
      true,
      // forbid leading and trailing underscores and enforce camelCase on EVERY name. will be overridden by subtypes if needed
      {"type": "default", "format": "camelCase", "leadingUnderscore": "forbid", "trailingUnderscore": "forbid"},
      // require all global constants to be camelCase or UPPER_CASE
      // all other variables and functions still need to be camelCase
      {"type": "variable", "modifiers": ["global", "const"], "format": ["camelCase", "UPPER_CASE"]},
      // override the above format option for exported constants to allow only UPPER_CASE
      {"type": "variable", "modifiers": ["export", "const"], "format": "UPPER_CASE"},
      // require exported constant variables that are initialized with functions to be camelCase
      {"type": "functionVariable", "modifiers": ["export", "const"], "format": "camelCase"},
      // require leading underscores for private properties and methods, all other rules still apply
      {"type": "member", "modifiers": "private", "leadingUnderscore": "require"},
      // same for protected
      {"type": "member", "modifiers": "protected", "leadingUnderscore": "require"},
      // enforce PascalCase for classes, interfaces, enums, etc. Remember, there are still no underscores allowed.
      {"type": "type", "format": "PascalCase"},
      // abstract classes must have the prefix "Abstract". The following part of the name must be valid PascalCase
      {"type": "class", "modifiers": "abstract", "prefix": "Abstract"},
      // interface names must start with "I". The following part of the name must be valid PascalCase
      {"type": "interface", "prefix": "I"}
    ]
  }
};
