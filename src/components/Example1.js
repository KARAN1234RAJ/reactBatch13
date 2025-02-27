import React, { useState } from "react";

const Example1 = (props) => {
     console.log(props);
     
  const [age, setAge] = useState(props.age);
  const [name, setName] = useState(props.name);
  return (
    <div>
      <h1>Example 1</h1>
      <h2>
        my name is {name} and i am {age} years old
      </h2>
    </div>
  );
};

export default Example1;
