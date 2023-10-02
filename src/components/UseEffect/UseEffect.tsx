import { useState, useEffect } from 'react';
import Button from '../../helpers/Button/Button';

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('The count is:', count);
    return () => {
      console.log('I am being cleaned up!');
    };
  }, [count]);

  return (
    <div>
      <h2>USE EFFECT</h2>
      <h2>Count: {count}</h2>
      <div>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  );
}

export default UseEffect;
