```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array. count is missing, causing infinite loop
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Missing 'count' dependency

  return <div>Count: {count}</div>;
}
```