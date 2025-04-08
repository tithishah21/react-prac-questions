// Task-1 I. To create a class-based component MyComponent. II. In the constructor, initialize the component's state with a count of 0. III. To define an event handler method handleClick which updates the state by incrementing the count when the button is clicked. IV. Inside the render method, display the current count and attach the handleClick event handler to the button using onClick attribute.

// CODE:

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


