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

## ✅ API 스타일
Vue 컴포넌트 : **Option API**와 **Composition API** 두가지 스타일로 작성 가능    

### ▶️ Option API
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

### ▶️ Composition API
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

## ✅ Template Syntax
Vue : 컴포넌트 인스턴스의 데이터를 렌더링된 DOM에 선언적으로 바인딩할 수 있는 HTML 기반 템플릿 문법 사용    
- JSX를 Template 대신 사용 가능
    - Template과 동일한 수준의 컴파일 시간 최적화 기대 X

### ▶️ Text Interpolation
이중 중괄호를 사용한 문법    
이중 중괄호 태그 내 `msg` : 해당 컴포넌트 인스턴스의 `msg` 속성 값으로 대체    
    - `msg` 속성 변경 시마다 업데이트    
```jsx
    <span>메시지 : {{ msg }}</span>
```

### ▶️ Javascript 표현식
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

### ▶️ Directives
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
### ▶️ 1. Reactive State 선언
Option API의 `data`옵션으로 컴포넌트의 reactive state 선언 가능    
- Vue : 새로운 컴포넌트 인스턴스 생성 시 함수 호출    
- 반환된 객체를 reactivity system에서 래핑     
  → 본 객체 내 모든 속성 : 해당 컴포넌트 인스턴스(메소드 / 생명주기 훅에서의 `this`)에서 최상위에 Proxy됨   
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

### ▶️ 2. Reactive Proxy
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

### ▶️ 3. Declaring Methods
`methods`옵션 : 컴포넌트 인스턴스에 메서드 추가를 위한 옵션   
```js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    // 메서드는 수명 주기 훅 또는 다른 메서드에서 호출할 수 있습니다.
    this.increment()
  }
}
```
- `methods` : `this`가 컴포넌트 인스턴스를 참조하도록 **항상 자동 바인딩**됨
  - 메서드 : 이벤트 리스너 or 콜백으로 사용되는 경우에도 `this`값은 컴포넌트 인스턴스로 유지됨
> `methods` 정의 시 화살표 함수 사용 지양할 것.   
> - 화살표 함수(`() =>`) : Vue가 `this`를 컴포넌트 인스턴스로 바인딩하는 것 방지하기 때문   

### ▶️ 4. DOM update timing
반응형 상태 변경 시 DOM 자동 업데이트   
→ DOM 업데이트 : _동기적으로 적용되지 않음_   
→ `Vue` : 업데이트 주그의 다음 틱(tick)까지 버퍼링하여 상태 변경을 여러번 수행해도 각 컴포넌트가 **한 번만 업데이트**되도록 함   

- 상태 변경 후 DOM 업데이트 완료까지 기다리기 위해 전역 API `nextTick()` 사용 가능   
```js
import { nextTick } from 'vue'

export default {
  methods: {
    increment() {
      this.count++
      nextTick(() => {
        // 업데이트된 DOM에 접근 가능
      })
    }
  }
}
```

### ▶️ 5. Deep Reactivity
Vue : 반응형 상태를 내부 깊숙이 추적 → 중첩된 객체나 배열 변경 시에도 변경 사항 감지   
- `얕은 반응형 객체`의 명시적 생성으로 _반응형이 루트 수준에서만 추적_ 되도록 할 수 있으나, 일반적으로 `깊은 반응형` 사용   
```js
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      // 변경 사항이 감지됩니다.
      this.obj.nested.count++
      this.obj.arr.push('baz')
    }
  }
}
```

### ▶️ Stateful Methods
메서드 함수의 동적인 생성이 필요한 경우 ex) 디바운스된 이벤트 핸들러 생성   
```js
import { debounce } from 'lodash-es'

export default {
  methods: {
    // Lodash로 디바운싱
    click: debounce(function () {
      // ... 클릭에 응답 ...
    }, 500)
  }
}
```
- 디바운스된 함수 : **일정 시간이 지나기 전까지 유지**됨 → 재사용 컴포넌트의 문제 발생
  - 여러 컴포넌트 인스턴스가 동일한 디바운스 함수를 공유할 때 간섭 발생
- 각 컴포넌트 인스턴스의 디바운스된 함수가 독립적으로 유지되기 위해 `created` 생명주기 훅에서 디바운스된 함수를 컨트롤하는 환경 구성 
```js
export default {
  created() {
    // 이제 각 인스턴스는 자체적인 디바운스된 핸들러를 가집니다.
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 컴포넌트가 제거된 후 
    // 타이머를 취소하는 것은 좋은 방법입니다.
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 클릭에 응답 ...
    }
  }
}
```

## ✅ Computed Properties
### ▶️ 1. Basis
반응형 데이터를 포함하는 복잡한 논리의 경우 `계산된 프로퍼티` 사용 지향   
```js
// js
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      // `this`는 컴포넌트 인스턴스를 가리킵니다.
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
```
```html
<!-- template -->
<p>책을 가지고 있다:</p>
<span>{{ publishedBooksMessage }}</span>
```
- Computed Properties : `publishedBooksMessage`
`data`에 있는 `book` 배열 값 변경 시, 그에 따른 `publishedBooksMessage` 변경 확인 가능   

### ▶️ 2. Computed Caching vs Method
표현식에서도 메서드 호출을 통해 동일한 결과 도출 가능   
```html
<p>{{ calculateBooksMessage() }}</p>
```
```js
// 컴포넌트 내에서
methods: {
  calculateBooksMessage() {
    return this.author.books.length > 0 ? 'Yes' : 'No'
  }
}
```
계산된 속성 대신 메서드로 동일한 기능 정의 가능   
두 접근 방식은 완전히 동일함   

- **두 방식의 차이점**
  1. 메서드 호출은 **리렌더링 발생 시마다 항상 함수 실행**   
  2. 계산된 프로퍼티는 **reactive dependencies(의존된 반응형)기반으로 캐싱**   
→ `author.books`가 변경되지 않을 경우 `publishedBooksMessage`에 접근해도 이전에 계산된 결과 반환   

### ▶️ 3. Writable Computed
계산된 속성은 기본적으로 `getter` 전용   
계산된 속성에 새 값을 할당할 시 `runtime error` 발생   
"수정 가능한" 계산된 속성이 필요할 때 `getter`와 `setter`를 모두 제공해 속성 생성 가능   
```js
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 참고: 분해 할당 문법을 사용함.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
```

## ✅ Lifecycle Hooks
### ▶️ 1. Basis
ex) `mounted` 훅 : 컴포넌트의 초기 렌더링 및 DOM 노드 생성이 완료된 후 코드 실행에 사용 가능   
```js
export default {
  mounted() {
    console.log(`컴포넌트가 마운트 됐습니다.`)
  }
}
```
- 인스턴스 생명 주기 단계에 따라 호출되는 훅 ex) `mounted`, `updated`, `unmounted` 
모든 생명주기 or 훅 : 호출되는 현재 활성 인스턴스를 가리키는 `this` 컨텍스트로 호출   
→ 생명주기 훅 선언 시 **화살표 함수를 사용하면 안됨**을 의미   

<img src="https://user-images.githubusercontent.com/66112716/213135767-6d52dff2-010d-4d18-90b9-ac34827086f0.png" width="700" />