# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Section7 라이프 사이클

## ch1. 라이프 사이클이란?

### 리액트 컴포넌트의 라이프 사이클

- Mount

  컴포넌트가 탄생하는 순간

  화면에 처음 렌더링 되는 순간

- Update

  컴포넌트가 다시 렌더링 되는 순간

  리렌더링 될 때를 의미

- UnMount

  컴포넌트가 화면에서 사라지는 순간

  렌더링에서 제외 되는 순간을 의미

### 라이프 사이클 제어

컴포넌트의 라이프 사이클의 단계별로 각각 다른 작업을 수행하도록 만드는 것

- useEffect를 이용하여 구현

## ch2. useEffect 사용하기

### useEffect

리액트 컴포넌트의 **_사이드 이펙트_**를 제어하는 새로운 React Hook

### 사이드 이펙트(SideEffect)란?

우리말로 **부작용** 이라는 뜻

리액트에서는 **부수적인 효과**, **파생되는 효과** 정도로 해석 가능

### React 컴포넌트의 사이드 이펙트

컴포넌트의 동작에 따라 **_파생되는 여러 효과_**

라이프사이클을 제어하는 것도 모두 결국엔 컴포넌트의 사이드 이펙트라고 볼 수 있다.

```
  const onClickButton = (value) => {
    setCount(count + value);
    console.log(count);
  }
```

- `console`에서는 변경되기 이전의 `count`를 출력한다.
- `setCount` 라는 상태변화함수가 비동기로 동작하기 때문이다.
- 비동기 동작이란?

  함수를 호출했지만 함수의 완료는 뒤늦게 되는 것

  따라서 `Console.log`가 실행될 때 `setCount()` 함수가 호출만 됐지 완료된 것은 아니다.

- 결과적으로 `useEffect`를 이용해야 된다.
