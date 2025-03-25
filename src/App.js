import React, { useState, useEffect } from "react";

// Unused variable (DeepCode should flag this)
const unusedVariable = "This variable is not used anywhere";

// Commented-out code (DeepCode should flag this)
{/* <button>Old Button</button> */}

const App = () => {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Logic for validation (but commented out logic)
    // console.log("Validation logic");
  }, []);
 

  // Improper function for state update (DeepCode might flag this)
  const handleClick = () => {
    // `count` is not updated as expected due to closure issue
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Test 123</h1>
      <button onClick={handleClick}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
