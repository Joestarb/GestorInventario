// src/App.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { increment, decrement } from "./features/counter/counterSlice";
import Input from "./components/Input";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Input
      label ="eso tilin"
      placeholder="eso tilin"
      name="eso tilin"
      />
    </div>
  );
};

export default App;
