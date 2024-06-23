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

## ch3. useEffect로 라이프사이클 제어하기

### 1. 마운트 : 탄생

```
  useEffect(() => {
    console.log("mount");
  }, []);
```

- 첫 번째 인수에는 callback 함수를 넣고 두 번째 depth에는 빈 배열을 넣어주면 된다.
- useEffect는 depth에 있는 값이 변경되어야만 실행이 되기 때문에 이 callback 함수는 이 컴포넌트가 처음 mount 될 때 이후에는 다시는 실행되지 않는다.
- 컴포넌트가 마운트 되었을 때만 딱 한 번 실행시키고 싶은 코드가 있다면 이를 활용하면 된다.

### 2. 업데이트 : 변화, 리렌더링

```
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
```

- 첫 번째 인수로 callback 함수를 넣고 두 번째 인수인 depth는 생략한다.
- 이렇게만 depth를 생략하면 마운트 될 때 한 번 실행된 후 이 컴퍼넌트가 리렌더링 될 때마다 즉, 업데이트 될 때마다 계속 실행된다.
- 마운트 시점을 제외하고 업데이트 될 때만 콜백함수를 실행하고 싶다면 `usdRef`를 이용하여 마운트 되었는지 확인할 수 있는 `isMount` flag를 만들어 조건문으로 확인한다.

### 3. 언마운트 : 죽음

```
useEffect(() => {
    // 클린업, 정리합수
    return () => {
      console.log("unmount");
    };
  }, [])
```

- useEffect 의 콜백함수가 반환하는 함수를 클립업 또는 정리함수라고 부른다.
- 정리함수는 useEffect가 끝날 때 실행된다.
- 위와 같이 depth를 빈 배열로 주면 마운트 될 때 실행이 되고, 종료는 언마운트 될 때 종료되기 때문에 그 때 이 정리함수를 호출하게 된다.

## ch4. React 개발자 도구 사용하기

### React Developer Tools 설치

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko

- 리액트 앱 개발 시 컴포넌트의 상태, state 값, props 등 확인 가능
- 설정에서 컴포넌트 렌더 옵션 체크 시 불필요하게 리렌더링이 발생하고 있는 컴포넌트는 뭐가 있는지 등의 것들을 쉽게 찾을 수 있다.
