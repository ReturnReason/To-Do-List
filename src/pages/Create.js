import React, { useState } from 'react';
import './Create.css';

const Create = () => {
  const [userInput, setUserInput] = useState('');
  const writeTask = (e) => {
    setUserInput(e.value);
  };

  return (
    <>
      <div className="create-wrapper">
        <form method="POST">
          <h2>TASK</h2>
          <input placeholder="할 일을 입력하세요." className="input" name="title" value={userInput} onChange={writeTask} />
          <h2>MEMO</h2>
          <textarea placeholder="메모를 입력하세요." className="input memo" name="memo" value={userInput} onChange={writeTask} />
        </form>
        <div className="btn-container">
          <button className="btn btn-add">ADD</button>
          <button className="btn btn-cancel">CANCLE</button>
        </div>
      </div>
    </>
  );
};

export default Create;
