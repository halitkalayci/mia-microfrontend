import React from "react";
import { useSelector } from "react-redux";

const Example = () => {
  const userStore = useSelector((state: any) => console.log(state));

  return <div>Example</div>;
};

export default Example;
