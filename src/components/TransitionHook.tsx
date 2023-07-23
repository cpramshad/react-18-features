import React, { useState } from "react";
const TransitionHook = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<any[]>([]);

  const LIST_SIZE = 20000;

  const handleChange = (e: any) => {
    setInput(e.target.value);
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
  };

  return (
    <>
      <input
        className="input-text"
        type="text"
        value={input}
        onChange={handleChange}
      />
      {list.map((item, index) => (
        <div className="list-item" key={index}>
          {item}
        </div>
      ))}
    </>
  );
};

export default TransitionHook;
