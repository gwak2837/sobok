# ☁️ 소복 (Sobok)

소소한 행복 :)

2021년 8월 10일 (화) ~ ing

## 구성원

|  이름  |                      GitHub                      |              역할               |
| :----: | :----------------------------------------------: | :-----------------------------: |
| 곽태욱 | [@rmfpdlxmtidl](https://github.com/rmfpdlxmtidl) |          Apollo Client          |
| 김효진 |       [@hy57in](https://github.com/hy57in)       | GA, Vercel 배포, CSS 애니메이션 |

## 프로젝트 소개

### 동기

디저트 검색이 불편해서

### 목적

디저트 검색을 편리하게 만들자!

## 데모

### 사용법

https://sobok.vercel.app 에 들어오세요~

### 사진·영상

git 또는 이미지 첨부

## 프로젝트 구조

![images/architecture.png](images/architecture.png)

## 개발 환경

- macOS 11.2
- [Git](https://git-scm.com/downloads) 2.32
- [Node](https://nodejs.org/ko/download/) LTS
- [Yarn](https://yarnpkg.com/getting-started/install#about-global-installs) 1.22
- [Visual Studio Code](https://code.visualstudio.com/Download) 1.58
- Chrome 89.0, Safari 14.0, Whale 2.9, Firefox 87.0

```bash
> git --version
> node --version
> yarn --version
> code --version
```

위 명령어를 통해 프로젝트에 필요한 모든 프로그램이 설치되어 있는지 확인합니다.

## 설치 방법

### 프로젝트 다운로드

```shell
> git clone 프로젝트-주소
> cd 프로젝트-폴더
> git checkout 브랜치-이름
> yarn
```

프로젝트를 다운로드 받고 해당 폴더로 이동한 후 적절한 브랜치로 이동하고 프로젝트에 필요한 외부 패키지를 설치합니다.

그리고 프로젝트 폴더에서 VSCode를 실행하면 오른쪽 아래에 '권장 확장 프로그램 설치' 알림이 뜹니다.

프로젝트에서 권장하는 확장 프로그램(ESLint, Prettier 등)을 모두 설치해줍니다.

### 환경 변수 설정

```
NEXT_PUBLIC_BACKEND_URL=
NEXT_PUBLIC_GOOGLE_ANALITICS_ID=
NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY=
```

프로젝트 루트 경로에 `.env.development`과 `.env.production` 파일을 생성하고 거기에 프로젝트에 필요한 환경 변수를 설정합니다.

> [Next.js 환경 변수 (nextjs.org)](https://nextjs.org/docs/basic-features/environment-variables)

### 개발 모드

```shell
> yarn dev
```

로컬 컴퓨터에서 개발 모드로 프로젝트를 실행하면, 수정한 파일을 저장했을 때 코드 변경 사항이 자동으로 브라우저에 반영됩니다.

### 배포 모드

```shell
> yarn build
> yarn start
```

코드 변경 사항이 자동으로 반영되진 않지만 코드 최적화로 인해 실행 속도가 빠릅니다.

### 브라우저 실행

```
http://localhost:3000
```

브라우저에서 아래 주소로 접속하면 개발 중인 사이트를 볼 수 있습니다.

### (Windows) ESLint LF 오류

```shell
> git config --global core.autocrlf input
> git config --global core.eol lf
```

에디터에서 라인 시퀀스 관련 ESLint 오류가 발생하면 Git 관련 설정을 위와 같이 변경해줍니다. 그리고 프로젝트 폴더를 지우고 다시 클론합니다.

> https://velog.io/@gwak2837/줄-시퀀스-충돌

### (Windows) PowerShell 보안 오류

```shell
> Set-ExecutionPolicy Unrestricted
```

PowerShell을 관리자 권한으로 열어서 보안 정책을 위와 같이 수정해줍니다.

> https://velog.io/@gwak2837/powershell-yarn-보안-오류

## 스크립트

### Pre-Push

```shell
> yarn pre-push
```

코드 포맷, 린트, TypeScript 타입 검사를 전부 수행합니다. 현재 이 명령어는 원격 저장소로 push 하기 전에 husky가 자동으로 실행해주고, 문제가 없는 경우에만 커밋을 원격 저장소로 push합니다.

### GraphQL Code Generator

```shell
> yarn generate
```

서버로부터 GraphQL Schema를 받아서 이에 해당하는 TypeScript 자료형과 apollo hook 등을 자동으로 생성해줍니다. 서버나 로컬의 GraphQL Schema가 변경됐을 때마다 실행합니다.

### Build

#### 정적 빌드

```shell
> yarn export
```

결과물에 웹 서버가 없게끔 정적으로 빌드합니다. 이 경우 결과물에 HTML, CSS, JS 파일만 포함됩니다.

#### 동적 빌드

```shell
> yarn build
```

결과물에 웹 서버가 포함되도록 동적으로 빌드합니다. 이 경우 결과물에 웹 서버 로직, JSON, HTML, CSS, JS 등이 포함됩니다.
