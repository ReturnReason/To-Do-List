import styled from 'styled-components';

function Detailtodo({ todos, selectedTodoId }) {
  const currentTodo = todos.find((todo) => {
    return todo.id === selectedTodoId;
  });

  console.log(currentTodo);

  return (
    <TodoDetailContainer>
      <div>{currentTodo.task}</div>
      <p>{currentTodo.memo}</p>
    </TodoDetailContainer>
  );
}

const TodoDetailContainer = styled.div`
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

export default Detailtodo;
