# React Fundamentals

This directory contains exercises to practice React concepts.

## Exercises

### 01. Components
- Functional components
- JSX syntax
- Props
- Component composition
- Children prop

**Key concepts:**
```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

<Card title="Title" content="Content" />
```

### 02. State and Hooks
- useState hook
- Event handling
- Conditional rendering
- Lists and keys

**Key concepts:**
```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Increment</button>
{isVisible && <div>Content</div>}
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

### 03. Effects
- useEffect hook
- Side effects
- Dependency arrays
- Cleanup functions
- Event listeners

**Key concepts:**
```jsx
useEffect(() => {
  // Side effect
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

### 04. Forms
- Controlled components
- Form submission
- Form validation
- Multiple inputs

**Key concepts:**
```jsx
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />
<form onSubmit={handleSubmit}>
```

### 05. Advanced Hooks
- useContext
- useReducer
- useMemo
- useCallback
- useRef

**Key concepts:**
```jsx
const theme = useContext(ThemeContext);
const [state, dispatch] = useReducer(reducer, initialState);
const memoized = useMemo(() => expensiveCalc(), [deps]);
const callback = useCallback(() => { }, [deps]);
const ref = useRef(null);
```

### 06. Custom Hooks
- Creating custom hooks
- Hook composition
- Reusable logic

**Key concepts:**
```jsx
function useCustomHook(initialValue) {
  const [state, setState] = useState(initialValue);
  // Custom logic
  return [state, setState];
}
```

## How to Practice

1. Open each exercise file
2. Read the comments and TODOs
3. Implement the components
4. Test manually or create test cases
5. Check solutions if needed

## Setup for Testing React Components

To test React components in a browser:

1. Create a simple HTML file with a script tag
2. Use a bundler like Create React App or Vite
3. Or use online editors like CodeSandbox or StackBlitz

## Tips

- Start with `01-components.jsx` and work sequentially
- Understand the component lifecycle
- Practice thinking in React (data flow, composition)
- Read the official React documentation
- Build small projects to apply what you learn

## Common Patterns

### Component Pattern
```jsx
function ComponentName({ prop1, prop2 }) {
  // Logic here
  return (
    <div>
      {/* JSX here */}
    </div>
  );
}
```

### State Management
```jsx
const [state, setState] = useState(initialState);
```

### Effect Pattern
```jsx
useEffect(() => {
  // Do something
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

### Event Handling
```jsx
const handleClick = () => {
  // Handle event
};

<button onClick={handleClick}>Click me</button>
```
