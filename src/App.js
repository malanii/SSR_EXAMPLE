
import * as React from "react";

function App() {
    const [count,setCount] = React.useState(0);
    const increment =() =>{
        setCount(count + 1)
    };
    const decrement =() =>{
        setCount(count - 1)
    };
  return (
      <div>
          <button onClick={increment}>Increment</button>
          <p>{count}</p>
          <button onClick={decrement}>Decrement</button>
      </div>

  );
}

export default App;
