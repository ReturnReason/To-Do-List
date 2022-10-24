import React, { useState, memo } from 'react';
import styled, { css } from 'styled-components';
import { CREATE_TODO, CLOSE_CREATE_TODO } from '../App';

const CreateForm = ({ dispatch, setShowCreateTodo, showCreateTodo }) => {
  const [userTaskInput, setUserTaskInput] = useState('');
  const [userMemoInput, setUserMemoInput] = useState('');

  const writeTask = (e) => {
    setUserTaskInput(e.target.value);
  };

  const writeMemo = (e) => {
    setUserMemoInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_TODO,
      todo: {
        task: userTaskInput,
        memo: userMemoInput,
      },
    });

    setUserTaskInput('');
    setUserMemoInput('');

    onClose();
  };

  const onClose = () => {
    setShowCreateTodo(false);
  };

  return (
    <>
      <TodoCreateContainer>
        <form method="" onSubmit={onSubmit}>
          <h2>TASK</h2>
          <Input
            required
            placeholder="할 일을 입력하세요."
            className="input"
            name="title"
            value={userTaskInput}
            onChange={writeTask}
          />
          <h2>MEMO</h2>
          <InputMemo
            required
            placeholder="메모를 입력하세요."
            className="input memo"
            name="memo"
            value={userMemoInput}
            onChange={writeMemo}
          />
          <ButtonContainer>
            <AddButton add>ADD</AddButton>
            <CancelButton onClick={onClose}>CANCLE</CancelButton>
          </ButtonContainer>
        </form>
      </TodoCreateContainer>
    </>
  );
};

export default memo(CreateForm);

const TodoCreateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #aebdff;
    margin-top: 50px;
  }

  .memo {
    height: 200px;
    border-radius: 20px;
    resize: none;
  }
`;

const Inputs = () => css`
  width: 550px;
  font-size: 20px;
  padding: 20px;
  border: 4px solid #94a8ff65;
  background-color: #e9edff6a;
  border-radius: 20px;
  box-shadow: 2px 5px 10px #b5c3ff3b;
  outline: none;
  color: #94a8ff;
  font-family: 'GmarketSansMedium';

  &::placeholder {
    color: #94a8ff65;
  }
`;

const Input = styled.input`
  ${Inputs}
`;

const InputMemo = styled.textarea`
  ${Inputs}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 550px;
  margin-top: 30px;
  gap: 30px;
`;

const AddButton = styled.button`
  border-radius: 20px;
  border: 4px solid #94a8ff65;
  width: 100%;
  height: 50px;
  font-size: 20px;
  color: #fff;
  background-color: #94a8ff;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.add ? '#a9b9ff' : 'none')};
  }
`;

const CancelButton = styled(AddButton)`
  color: #94a8ff;
  background: #fff;
`;
