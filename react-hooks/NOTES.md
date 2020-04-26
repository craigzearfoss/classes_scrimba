# React Hooks

- Scrimba
- Christian Jensen
- Completed Apr 25, 2020

---

- Hooks allow sharing of data between components easily.
- 

### What We'll Learn
- useState
- useEffect
- useRef
- useCallback
- useMemo
- React.memo
- Custom hooks

### useState()
- Returns an array with two elements:
  - 1st element is the state.
  - 2nd element is a function to update the state.
- You can use array destructuring to get both elements from the array.
- Remember that state management is asychronous so instead of passing a value to your function you can pass a function.
  - So instead of: *<button onClick={() => setCount(count + 1)}>+</button>*
  - Use: *<button onClick={() => setCount(currentCount => currentCount + 1)}>-</button>*
- Here is an article to read in inline function performance: [React, Inline Functions, and Performance](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)

### useEffect
- The function has two parameters:
  - 1st parameter is a function.
  - 2nd parameter is an array of variables that when changed will trigger the affect.
    - If the array is empty then the effect when only be run when the component renders.
    - If you omit the array the side effect will run every time the component renders.

### useRef
- Allows you access to DOM elements.
- You need to add the ref to the element.
  - *\<input ref={inputRef} type="text" value="whatever" />*
  - You would reference this elmenent in your component like:
    - *const inputRef = useRef()*
- The ref will be persistent inbetween renders.
- The **ref.current** property holds the DOM element. So, for example to set focus to the ref element:
  - *inputRef.current.focus();*
- You can use it for thing other things, but accessing DOM elements is the most common use case.
- You can use it anytime you need a value that is the same between renders.

### **memoization**
- If you have a pure function you can **memoize** it.
  - That is, if you put in the same input multiple times it will simply return the same output that it calculated the last time.
  - This is usually used with expensive functions that take lots of time or resources.

### useCallback
- The function has two parameters:
  - 1st parameter is a function. (Just like the useEffect function.)
  - 2nd parameter is an array of dependencies. 
- When anything in the array changes, useCallback will give us a new function instance.

### useMemo
- Like **useCallback**, but instead of returning the function it returns the result of the function.
- So the following two are equivalents:
```
useCallback(() => console.log('useCallback'));
useMemo(() => () => console.log('useMemo'))
```

## Custom Hooks
- You might want to create your own custom hooks for reusability.
  - But if you have two unrelated pieces of state that might make it more difficult.
- Think of them as small, composable, and as reusable as possible.
- The convetion is to start them with "use"

---

# Two Rules
## 1. Only call hooks on the top level.
## 2. Only call hooks from React functions. (Not your own custom functions)

