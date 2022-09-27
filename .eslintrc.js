module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    extends: [
      // eslint와 prettier가 충돌나는 부분 비활성화 ( eslint-config-prettier )
      "prettier",
      "plugin:jsx-a11y/recommended"  
    ],
    plugins: [
      // prettier 규칙을 eslint에 적용시키게 해줌 ( eslint-plugin-prettier )
      "prettier",
  
      // ES2015의 import/export 구문 지원 ( eslint-plugin-import )
      "import",
  
      // React관련 eslint 설정 지원 ( eslint-plugin-react )
      "react",
      "jsx-a11y",
    ],
    rules: {
      // prettier 규칙을 어기면 error 발생
      "prettier/prettier": ["error"],
      "jsx-a11y:rule-name": 2
    },
    settings: {
      "jsx-a11y": {
        "components": {
          "CityInput": "input",
          "CustomButton": "button",
          "MyButton": "button",
          "RoundButton": "button"
        }
      }
    }
    
  };