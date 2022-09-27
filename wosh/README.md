# 계산기 React - 정세훈, 최원오

## 1. Styled Components

- styled components는 props는 자동으로 들어간다. 추가적인 로직이 필요하지 않은 경우 styled로 생성한 component만 사용해도 된다. <br/> UI용으로 사용하는 component나 최하단 자식 component의 경우 유용할 것 같다.

## 2. 컴포넌트 최적화 (Memo) 아쉽!

- 계산기의 경우 상단의 클릭한 버튼의 숫자가 들어오는 부분을 제외하고는 다시 생성할 필요가 없는 애플리케이션이다. <br />
  리액트의 Memo를 사용하여 리렌더링을 방지하고 싶었지만 실패!<br/>
  상태를 context와 useReducer로 관리해 useReducer의 dispatch를 포함한 handler 함수를 useCallback으로 감싸 넘기고 Provider의 value prop 으로 넘긴 dispatchHandler를 사용하는 함수들도 useCallback으로 감싸줬다. 그리고 prop전달이 변경되기 않는 경우 리렌더를 하지 않도록 React.memo를 component에 사용했으나 동일한 하이라이트 체크 시 리렌더링이 발생함을 확인했다.
- context는 결국 prop이다. value로 넘겨주는 prop이 변경되니까 리렌더링이 발생했다. value 내부 객체 프로퍼티 별로 의존성을 추가할 수 있는 걸로 알고 있었는데 공부가 필요하다.
- 계산에 필요한 숫자와 연산자를 같은 관심사로 판단해 하나의 useReducer로 관리를 했는데 숫자와 operator를 따로 useReducer로 상태 관리를 했다면 숫자버튼을 눌릴 경우에는 연산자 버튼은 리렌더를 방지할 수 있었을 것 같다. 그리고 두개의 상태로 관리함으로써 useEffect로 부수효과를 관리하는 것도 공부할 수 있지 않았을까
- context를 사용해 각 각의 버튼에 eventHandler를 생성하고 useCallback으로 감싸줘서 비용적으로 최적화가 되었다한들 좋치않은 코드였다. context 공부를 연습할 겸 prop을 최소화했지만 prop으로 이벤트핸들러를 전달하는게 훨씬 유리한 코드였다.
