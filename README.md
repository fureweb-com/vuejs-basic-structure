# Vue.js 기본 구조 설정 보관을 위한 저장소

## 1. 빌드파일 생성
`npm run build` 
터미널에서 위 명령을 실행하면 /build 디렉토리에 index.html과 bundle.js 파일이 생성된다.

## 2. 기본 디렉토리 및 파일 구조
/vue-default-structure
[src]
[view]
[build]
Gruntfile.js
package.json
settings.json
webpack.config.js

## 3. Grunt를 이용한 grunt task 실행
- build 디렉토리의 모든 파일을 삭제한다.
- view 디렉토리의 index.html 파일을 빌드 디렉토리로 복사시킨다.
- webpack을 실행하여 설정파일을 읽어들인 뒤 entry로부터 연결된 모든 파일을 번들링한다.

## 4. settings.json
- source: 프로젝트 루트 디렉토리를 기준으로 한 소스 디렉토리 위치
- target: 프로젝트 루트 디렉토리를 기준으로 한 빌드 디렉토리 위치

