module.exports = {
  "extends": [
    "tslint-eslint-rules"
  ],
  "rulesDirectory": [
    "codelyzer",
    "rxjs-tslint"
  ],
  "rules": {
    // New rules
    "typedef": {
      "severity": "warning",
      "options": [
        "call-signature",
        "parameter"
        // "arrow-call-signature",
        // "arrow-parameter"
        // "property-declaration",
        // "variable-declaration",
        // "variable-declaration-ignore-function"
        // "member-variable-declaration",
        // "object-destructuring",
        // "array-destructuring",
      ]
    },

    "ordered-imports": [
      true,
      {
        "module-source-path": "full",
        "import-sources-order": "lowercase-last",
        "named-imports-order": "lowercase-first",
        "grouped-imports": true,
        "groups": [
          {
            "name": "core",
            "match": "^(@angular)",
            "order": 1
          },
          {
            "name": "ngrx",
            "match": "^(@ngrx)",
            "order": 1
          },
          {
            "name": "env",
            "match": "^(@env)",
            "order": 2
          },
          {
            "name": "rxjs",
            "match": "^(rxjs)",
            "order": 3
          },
          {
            "name": "store",
            "match": "(\\/store)",
            "order": 4
          },
          {
            "name": "actions",
            "match": "(\\/actions)",
            "order": 4
          },
          {
            "name": "effects",
            "match": "(\\/effects)",
            "order": 4
          },
          {
            "name": "reducers",
            "match": "(\\/reducers)",
            "order": 4
          },{
            "name": "selectors",
            "match": "(\\/selectors)",
            "order": 4
          },{
            "name": "modules",
            "match": "(\\.module)",
            "order": 5
          },{
            "name": "pages",
            "match": "(\\/pages)",
            "order": 6
          },{
            "name": "containers",
            "match": "(\\/containers)",
            "order": 7
          },{
            "name": "components",
            "match": "(\\/components)",
            "order": 8
          },{
            "name": "directives",
            "match": "(\\/directives)",
            "order": 9
          },{
            "name": "services",
            "match": "(\\/services)",
            "order": 10
          },{
            "name": "service",
            "match": "(.service)",
            "order": 10
          },{
            "name": "providers",
            "match": "(\\/providers)",
            "order": 11
          },{
            "name": "guards",
            "match": "(\\/guards)",
            "order": 12
          },{
            "name": "pipes",
            "match": "(\\/pipes)",
            "order": 13
          },{
            "name": "utils",
            "match": "(\\/utils)",
            "order": 14
          },{
            "name": "interfaces",
            "match": "(\\/interfaces)",
            "order": 15
          },{
            "name": "models",
            "match": "(\\/models)",
            "order": 16
          },{
            "name": "constants",
            "match": "(\\/constants)",
            "order": 17
          },{
            "name": "ui",
            "match": "(\\/ui)",
            "order": 18
          },{
            "name": "shared",
            "match": "(\\/shared)",
            "order": 19
          },{
            "name": "refs",
            "match": "(\\/refs)",
            "order": 20
          },{
            "name": "other",
            "match": ".*",
            "order": 21
          }
        ]
      }
    ],

    // Old rules
    "rxjs-collapse-imports": true,
    "rxjs-pipeable-operators-only": true,
    "rxjs-no-static-observable-methods": true,
    "rxjs-proper-imports": true,
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
    "no-empty": false,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
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
    "variable-name": false,
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],
    "directive-selector": [
      true,
      "attribute",
      "bl",
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "bl",
      "kebab-case"
    ],
    "no-input-rename": true,
    "no-output-rename": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": true,
    "directive-class-suffix": true,
    "object-curly-spacing": [true, "always"],
    "array-bracket-spacing": [true, "never"],
    "space-in-parens": [true, "never"]
  }
};
