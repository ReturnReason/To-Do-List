import { useState } from 'react';
import styled from 'styled-components';
import { DELETE_TODO } from '../App';
import Detailtodo from './DetailTodo';

const TodoList = ({ todos, dispatch }) => {
  const [showDetailTodo, setShowDetailTodo] = useState(false);
  const [selectedTodoId, setselectedTodoId] = useState('');

  const deleteTodo = (todo) => () => {
    dispatch({
      type: DELETE_TODO,
      data: todo,
    });
  };

  const openDetailTodo = (todo) => (e) => {
    if (e.target.tagName === 'IMG') return;
    setShowDetailTodo(true);
    setselectedTodoId(todo.id);
  };

  return (
    <>
      <TodoListContainer>
        {todos &&
          !showDetailTodo &&
          Array(todos.length)
            .fill()
            .map((todo, i, arr) => {
              return (
                <TodoItem
                  onClick={openDetailTodo(todos[i])}
                  key={`${i}번째 to do 아이템`}
                >
                  <Title>{todos[i].task}</Title>
                  <DeleteButtonContainer
                    onClick={deleteTodo(todos[i])}
                    role="button"
                    dataName="delete"
                  >
                    <RecycleIcon src="recycle_bin.svg"></RecycleIcon>
                  </DeleteButtonContainer>
                </TodoItem>
              );
            })}

        {showDetailTodo && (
          <Detailtodo todos={todos} selectedTodoId={selectedTodoId} />
        )}
      </TodoListContainer>
    </>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  padding-top: 25px;
  height: 500px;
  width: 100%;
  overflow: scroll;
`;

const RecycleIcon = styled.img`
  width: 23px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s;
  margin-top: 2px;
  margin-right: 10px;
`;

const DeleteButtonContainer = styled.div`
  position: relative;
`;

const TodoItem = styled.div`
  margin: 0 auto;
  position: relative;
  border-radius: 100px;
  border: 4px solid #94a8ff65;
  width: 480px;
  height: 55px;
  padding-left: 25px;
  padding-right: 25px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 5px 10px #b5c3ff3b;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    scale: 1.02;
    border: 4px solid #94a8ff;

    ${RecycleIcon} {
      opacity: 1;
      transition: all 0.2;
    }
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: #94a7ff;
  font-family: 'GmarketSansMedium';
  font-weight: normal;
  padding-top: 3px;
  margin-left: 10px;
`;
