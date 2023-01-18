# Vue Codejam
- **Vue** : 사용자 인터페이스 구축을 위한 Javascript 프레임워크
    - 인터페이스를 효율적으로 개발할 수 있는 컴포넌트 기반 프로그래밍 모델 제공
    - 프로그레시브 자바스크립트 프레임워크

## ✅ Vue.js 특징
- 빌드 과정 없이 정적 HTML에 적용
- 모든 페이지에 웹 컴포넌트로 추가
- 싱글 페이지 어플리케이션 (SPA: Single-Page Application)
- Fullstack / 서버 사이드 렌더링 (SSR: Server-Side-Rendering)
- Jamstack / 정적 사이트 생성 (SSG: Static-Site-Generation)
- 데스크톱, 모바일, WebGL 또는 터미널을 대상으로 하는 경우

- **MVVM 패턴**
    - 화면 UI를 표시하는 View 코드와 로직을 분리하는 모델 코드 분리
<img src="https://user-images.githubusercontent.com/66112716/213118510-4b017aec-709d-4770-8df7-b5870c82174d.png" width="700" />

- **컴포넌트 기반**
    - Vue : 컴포넌트 단위로 프로그램 개발
<img src="https://user-images.githubusercontent.com/66112716/213118809-1619038d-a658-4364-9aa8-4c4c06ac135f.png" width="700" />

- **리액트와 앵귤러의 장점을 가진 프레임워크**
    - Angular와의 공통점 : 양방향 데이터 바인딩 지원
    - React와의 공통점 : 단방향 데이터 흐름 방식을 취하며, virtual DOM 지원

||**Angular**|**React**|**Vue**|
|:---:|:---:|:---:|:---:|
|**언어**|Typescript|JS|ES6|
|**Virtual DOM**|X|O|O|
|**장점**|구조화가 잘 되어있어 유지보수 용이<br>구글의 지원|다양한 이벤트 핸들링에 용이<br>페이스북의 지원<br>다양한 플랫폼 개발 가능|낮은 진입장벽<br>Angular2와 React의 장점 적용|
|**단점**|높은 러닝커브|필수 라이브러리가 많음<br>JSX 한곳에 로직 구현|상대적으로 레퍼런스가 적음|
|**적합한 환경**|엔터프라이즈|많은 이벤트 사용|빠른 개발 속도가 필요하고 많은 교육이 어려운 경우|

## ✅ Vue.js 문법
- **선언적 렌더링과 반응성**
    - SFC (Single File Component)
    - 컴포넌트의 논리(Javascript), 템플릿(HTML) 및 스타일(CSS)을 하나의 파일에 캡슐화
    - `.vue`
    - 반응성
    - State 변경을 추적하고, 변경이 발생하면 효율적인 DOM 업데이트를 자동으로 수행

- **옵션 API vs 컴포지션 API**
    - 옵션 API
        ```js
            <template>
                <button @click="increment">숫자 세기: {{ count }}</button>
            </template>

            <script lang="ts">
            export default {
                // data()에서 반환된 속성들은 반응적인 상태가 되어 this에 노출됨
                data() {
                    return {
                        count: 0,
                    };
                },

                // methods는 속성 값을 변경하고 업데이트 할 수 있는 함수
                // 템플릿 내에서 이벤트 리스너로 바인딩 될 수 있음
                methods: {
                    increment() {
                        this.count++;
                    },
                },

                // 생명주기 훅(Lifecycle hooks)은 컴포넌트 생명주기의 여러 단계에서 호출됨
                // 이 함수는 컴포넌트가 마운트 된 후 호출됨
                mounted() {
                    console.log(`숫자 세기의 초기값은 ${count.value} 입니다.`);
                },
            };
            </script>
        ```
    - 컴포지션 API
        - 컴포넌트 로직을 유연하게 구성할 수 있도록 하는 함수 기반의 API
        ```js
            <template>
                <button @click="increment">숫자 세기: {{ count }}</button>
            </template>

            <script setup lang="ts">
            import { ref, onMounted } from "vue";

            // 반응적인 상태의 속성
            const count = ref(0);

            // 속성 값을 변경하고 업데이트 할 수 있는 함수
            function increment() {
                count.value++;
            }

            // 생명주기 훅
            onMounted(() => {
                console.log(`숫자 세기의 초기값은 ${count.value} 입니다.`);
            });
            </script>        
        ```

- **디렉티브**
    - `v-`접두사로 시작하는 특수한 속성으로 Vue 템플릿 문법
<img src="https://user-images.githubusercontent.com/66112716/213125298-84f50e6b-a9a6-4158-b7bf-206dac00398f.png" width="600" />
