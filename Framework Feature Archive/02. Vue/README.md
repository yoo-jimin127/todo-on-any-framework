# Vue.js Basis

## ✅ Intoduction
**Vue** : 사용자 인터페이스 구축을 위한 JS 프레임워크    
```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```
```js
<div id="app">
  <button @click="count++">
    숫자 세기: {{ count }}
  </button>
</div>
```

- **Vue 핵심 기능**
    - 선언적 렌더링(Declarative Rendering) : 
        - 표준 HTML을 템플릿 문법으로 확장
        - Javascript 상태(State)를 기반으로 화면에 출력될 HTML을 선언적으로 작성 가능
    - 반응성(Reactivity) :
        - Javascript 상태(State) 변경 추적
        - 번갈아 발생하면 DOM을 효율적으로 업데이트하는 작업 자동 수행

## ✅ 프로그레시브 프레임워크
- 빌드 과정 없이 정적 HTML에 적용
- 모든 페이지에 웹 컴포넌트로 추가
- 싱글 페이지 어플리케이션 (SPA: Single-Page Application)
- Fullstack / 서버 사이드 렌더링 (SSR: Server-Side-Rendering)
- Jamstack / 정적 사이트 생성 (SSG: Static-Site-Generation)
- 데스크톱, 모바일, WebGL 또는 터미널을 대상으로 하는 경우


## ✅ SFC (Single-File Component)
빌드 도구를 사용하는 대부분의 Vue 프로젝트에서 HTML과 유사한     
싱글파일 컴포넌트(Single-File Component: SFC, `*.vue` 파일)라는 파일 형식을 사용해 Vue 컴포넌트 작성    
```js
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">숫자 세기: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

## 📌 API 스타일
Vue 컴포넌트 : **Option API**와 **Composition API** 두가지 스타일로 작성 가능    

### Option API
옵션 API로 옵션의 `data`, `methods`, `mounted`와 같은 객체를 사용해 컴포넌트의 로직 정의    
옵션으로 정의된 속성 : 컴포넌트의 인스턴스 가리키는 함수 내부 `this`에 노출     
```js
<script>
export default {
  // data()에서 반환된 속성들은 반응적인 상태가 되어 `this`에 노출됩니다.
  data() {
    return {
      count: 0
    }
  },

  // methods는 속성 값을 변경하고 업데이트 할 수 있는 함수.
  // 템플릿 내에서 이벤트 리스너로 바인딩 될 수 있음.
  methods: {
    increment() {
      this.count++
    }
  },

  // 생명주기 훅(Lifecycle hooks)은 컴포넌트 생명주기의 여러 단계에서 호출됩니다.
  // 이 함수는 컴포넌트가 마운트 된 후 호출됩니다.
  mounted() {
    console.log(`숫자 세기의 초기값은 ${ this.count } 입니다.`)
  }
}
</script>

<template>
  <button @click="increment">숫자 세기: {{ count }}</button>
</template>
```

### Composition API
컴포넌트 API 사용 시 : `import`해서 가져온 API 함수를 사용해 컴포넌트의 로직 정의    
SFC에서의 컴포지션 : `<script setup>`과 함께 사용    
```jsx
<script setup>
import { ref, onMounted } from 'vue'

// 반응적인 상태의 속성
const count = ref(0)

// 속성 값을 변경하고 업데이트 할 수 있는 함수.
function increment() {
  count.value++
}

// 생명 주기 훅
onMounted(() => {
  console.log(`숫자 세기의 초기값은 ${ count.value } 입니다.`)
})
</script>

<template>
  <button @click="increment">숫자 세기: {{ count }}</button>
</template>
```

## 📌 Template Syntax
Vue : 컴포넌트 인스턴스의 데이터를 렌더링된 DOM에 선언적으로 바인딩할 수 있는 HTML 기반 템플릿 문법 사용    
- JSX를 Template 대신 사용 가능
    - Template과 동일한 수준의 컴파일 시간 최적화 기대 X

### Text Interpolation
이중 중괄호를 사용한 문법    
이중 중괄호 태그 내 `msg` : 해당 컴포넌트 인스턴스의 `msg` 속성 값으로 대체    
    - `msg` 속성 변경 시마다 업데이트    
```jsx
    <span>메시지 : {{ msg }}</span>
```

### Javascript 표현식
Vue : 모든 데이터 바인딩 내에서 Javascript 표현식의 모든 기능    
- 이중 중괄호(텍스트 보간법) 내부
- 모든 Vue 디렉티브 속성 (`v-`로 시작하는 특수 속성) 내부
```jsx
{{ number + 1 }}

{{ ok ? '예' : '아니오' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```
- **특징**
    - 각 바인딩 : 하나의 단일 표현식만 포함
    - 표현식 내부 : `component-exposed method` 호출 가능
        - 바인딩 표현식 내부에서 호출되는 함수 : 컴포넌트가 업데이트 될 때마다 호출됨
        - 데이터 변경 or 비동기 작업 트리거의 부작용이 없어야 함
    - 제한된 전역 객체 목록에만 접근 가능
        - ex) `Math`, `Date`(`window` X)

### Directives
Vue : `Attribute Bindings`, `Raw HTML`등과 같은 기능 구현 용이를 위해 `Built-in Directives` 제공    
- 디렉티브의 역할 : 표현식 값이 변경될 때 DOM에 반응적으로 업데이트 적용
- 단축 문법 존재
![image](https://user-images.githubusercontent.com/66112716/212718758-c55ea24c-2b0d-497f-8f2e-54023b14a1aa.png)

- ex)
```js
<a v-on:[eventName]="doSomething"> ... </a>

<!-- 단축 문법 -->
<a @[eventName]="doSomething">
```

## ✅ Reactivity Fundamentals
### Reactive State 선언
Option API의 `data`옵션으로 컴포넌트의 reactive state 선언 가능    
- Vue : 새로운 컴포넌트 인스턴스 생성 시 함수 호출    
- 반환된 객체를 reactivity system에서 래핑    
```js
export default {
	data() {
    return {
      count: 1
    }
  },

	// `mounted`: Lifecycle Hook
  mounted() {
    // `this`: 컴포넌트 인스턴스
    console.log(this.count) // => 1

    // 값을 변경할 수 있다.
    this.count = 2
  }
}
```
- 인스턴스가 처음 생성될 때에만 인스턴스 프로퍼티에 추가 가능
- 나중에 추가되는 프로퍼티의 경우 임의의 값 할당 필요
- `this`에 직접 프로퍼티 추가 가능, 단 해당 프로퍼티로 인한 반응형 업데이트 발생 X
- `$`, `_` 접두사 사용 지양

### Reactive Proxy
Vue 3 : Javascript Proxy 활용해 데이터를 반응형으로 만듦    
```js
export default {
  data() {
    return {
      someObject: {}
    }
  },
  mounted() {
    const newObject = {}
    this.someObject = newObject

    console.log(newObject === this.someObject) // false
  }
}
```
- `newObject` 객체를 `this.someObject`에 할당 후 접근 시, 해당 값은 원본을 반응형으로 재정의한 Proxy Object
- 원본 `newObject`객체 : 그대로 유지, 반응형으로 변화 X