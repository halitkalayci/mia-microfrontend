import React, { useState } from "react";
import "./counter.css";
import { signIn } from "common";
import { useDispatch } from "react-redux";
export default function Counter() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(signIn({ id: 1, name: "Halit" }));
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>

      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
}
