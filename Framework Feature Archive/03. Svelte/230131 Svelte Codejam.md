# Sveltekit Codejam
리치 해리스 : 리액트 & 뷰 보완 목적   

## SvelteKit
- svelte를 사용해 강력한 성능의 웹 애플리케이션을 빠르게 개발하기 위한 프레임워크
- **스벨트**
    - 런타임 이전인 build xkdladp JS코드로 바뀌어 프레임워크 사용 시의 앱 로드 패널티를 가지지 않아도 됨
        - 컴파일러에 가까움

- **스벨트킷**
    - 프레임워크
    - CLI로 skeleton 앱을 만들어주고, 스벨트 자체에는 포함되지 않는 개발 시에 꼭 필요한 “라우팅”같은 기능 포함
    - SSR(default), CSR, pregeneration 지원

## Svelte 특징
[Svelte 공식 문서](https://svelte.dev/blog/virtual-dom-is-pure-overhead)   
1. **Write less code**   
    - HTML, CSS, JS에서 크게 벗어나지 않은 친숙한 문법
2. **No virtual DOM**   
    - 바닐라 JS로 virtual DOM을 대신 (효율적인 컴파일)
    - diffing 작업으로 인한 불필요한 연산
    - DOM diffing 연산 X
    - 빌드 시간에 컴파일됨
3. **Truly Reactive**   
    - 라이브러리없이 순수 JS로만 상태 관리할 것을 권장
    - API 필요 X
    - 개발자가 표시해준 부분만 자신들이 컴파일

## Svelte 사용법
- **컴포넌트 기반 프로그래밍**
    - 상위 컴포넌트에서 하위 컴포넌트를 import해 markup에서 사용

- **Reactivity**
    - 추가로 리액티브 디클래레이션은 할당에 의해 재실행됨
    - 만약 push나 pop같은 mutate 메서드에 의한 값 변경은 반영 X
        - 꼭 재할당으로 사용

- **Props**
    - 하위 컴포넌트에서 property를 export해 바로 사용  

- **Context API**
    - 스벨트의 컨텍스트 API는 컴포넌트의 데이터와 기능을 prop으로 돌리는 것을 막고, “대화”의 형식으로 해결하기 위해 사용
    1. 스벨트 컨텍스트 API는 상위 컴포넌트에서 setContext 작업  
    2. 하위 컴포넌트에서 getContext를 하여 “단방향”의 흐름을 유지  
    - 부모 → 형제로의 단방향  

- **Store**
    - Context API의 차이 : 앱 전역에서 사용 가능
    - Store api : 상태 관리 라이브러리의 옵저버블 패턴을 사용하여 상태 관리  

## Sveltekit 사용법
- **Sveltekit's Routing**
    - `src` 폴더 & `routes` 폴더로 라우팅 지원
    - `src/routes` : root 라우트 
    - `src/route/about` : about path

- `+page`
    - `+page.svelte`파일 생성 : page 컴포넌트를 렌더링할 것이라는 의미

- `+layout`
    - `Header`, `Footer`같은 여러 페이지에서 사용되는 컴포넌트의 역할 수행
    - `layout` 컴포넌트에서 `slot` 태그를 이용하여 `page` 컴포넌트가 들어갈 부분을 명시

