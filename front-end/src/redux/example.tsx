
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './createslice-reducers';
import { RootState } from './store';
function App() {
  const count = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>Counter: {count}</h1> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
    </div>
  );
}

export default App;