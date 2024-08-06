# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ch1. 감정일기장 소개 및 준비

## 감정 일기장 소개

- 감정 일기장

  - 일기를 작성하는 서비스

  - 감정까지 함께 기록할 수 있음

- 새로운 일기를 작성하는 페이지

  - /new라는 경로를 가짐

  - 감정 일기장은 여러개의 페이지로 이루어짐

## 감정 일기장 프로젝트의 목표

- 외부 폰트(Font) 사용법

- 이미지 사용법 (+최적화)

- 다양한 페이지를 제공하는 방법

- 공통 컴포넌트로 UI 요소 모듈화

- 복잡한 데이터를 다루는 방법

- 클라우드 서비스를 이용해 리액트 앱을 실제로 배포하는 방법

- ... 기타 등등

# ch2. 페이지 라우팅 - 1. 소개

## 페이지라우팅(Page Routing)

경로에 따라 알맞은 페이지를 렌더링하는 과정

ex) /new → new 페이지 렌더링

## 페이지 라우팅의 원리

### Multi Page Application (MPA)

애초에 서버가 여러개의 페이지를 가지고 있음

많은 서비스가 사용하는 전통적인 방식

페이지 이동 시 모든 요소 교체

⇒ 서버 사이드 렌더링 (Server Side Rendering)

![image](https://github.com/user-attachments/assets/b148a5b0-14ba-4cde-90a8-ed302609c715)

- React.js는 이 방식을 따르지 않음 → 쾌적한 페이지 이동 제공이 어렵기 때문

### MPA 방식의 단점

1. 페이지 이동이 매끄럽지 않고 비효율적임
2. 다수의 사용자 접속시, 서버의 부하가 심해짐

## React의 SPA(Single Page Application)

1. 페이지 이동이 매끄럽고 효율적임
2. 다수의 사용자가 접속해도 크게 상관 없음
3. 페이지 이동 시 필요한 요소만 교체

⇒ 클라이언트 사이드 렌더링 (Client Side Rendering)

![image](https://github.com/user-attachments/assets/2be1a58f-33a4-4c84-a169-d39cb445dd36)
