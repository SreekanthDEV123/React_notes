import React,{useState} from "react";

const WithCounter = (WrappedComponent) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    const Increment = () => {
      setCount(count + 1);
    };

    return <WrappedComponent count={count} Increment={Increment} {...props}/>;
  };
  return NewComponent;
};

export default WithCounter;
