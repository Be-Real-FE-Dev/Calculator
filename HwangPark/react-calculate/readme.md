# CalCulator
<br>
<div align="middle">
  <image src="./src/assets/calculator.svg"/>
</div>
<br>
<p align="middle">
  <img src="https://img.shields.io/badge/Version-1.0.0-red?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/Library-React-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/Style-StyledComponent-hotpink.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square"/>
</p>

<br>

## 🎯 기능 요구사항

- 2개의 숫자에 대해 덧셈이 가능하다.
- 2개의 숫자에 대해 뺄셈이 가능하다.
- 2개의 숫자에 대해 곱셈이 가능하다.
- 2개의 숫자에 대해 나눗셈이 가능하다.
- AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- 계산 결과를 표현할 때 소수점 이하는 버림한다.

<br>

## 📁 folder Architecture

- vite를 사용하여 build
- UI : atomic components
- Calculator : 계산기 UI를 구성하는 components

```
  react-calculator
  ├── public/
  ├── src/
  │   ├── assets/
  │   └── components/
  │       ├── Calculator/
  │       └── UI/
  ├── index.html
  ├── package.json
  └── webpack.config.js
```

<br>

## 🆕 새로 알게된 것

### 1. Styled Component

- view만 그리는 컴포넌트는 styledComponent 문법으로만 사용해도 무방하다.
- component extending styles 하기

  1. tagged template literals를 사용하여 Button 컴포넌트 생성.
  2. 기존의 Button 컴포넌트에 스타일을 추가하여 컴포넌트를 확장 가능.

  ```js
  import styled from 'styled-components';

  const Button = styled.button`
    color: #131313;
    background-color: #151515;
  `;

  const ComposedButton = styled(Button)`
    color: #999999;
    ...
  `;
  ```

- component에 props 적용하기

  1. styled-component는 기본적으로 arguments로 props에 대한 정보를 받는다.

  ```js
  // Button.js
  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  `;

  // App.js
  const App = () => {
    return <Button primary={true}>추가</Button>;
  };
  ```

  단점: props를 받아서 사용하므로 자식 컴포넌트가 부모 컴포넌트에 의존적이다. atomic 하지 않다.
<br>

## 🤔 고민한 것

### state를 어떻게 나눌 것인가?
<br>
