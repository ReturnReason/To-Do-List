import styled, { css } from 'styled-components';

function Detailtodo({ todos, selectedTodoId, setShowDetailTodo }) {
  const currentTodo = todos.find((todo) => {
    return todo.id === selectedTodoId;
  });

  const onCancle = () => {
    setShowDetailTodo(false);
  };

  return (
    <TodoDetailContainer>
      <DetailTitle>{currentTodo.task}</DetailTitle>
      <DetailMemoContainer>
        <DetailMemo>{currentTodo.memo}</DetailMemo>
      </DetailMemoContainer>
      <CloseBtn onClick={onCancle}>CANCLE</CloseBtn>
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

const DetailTitle = styled.div`
  font-family: 'GmarketSansMedium';
  margin: 0 auto;
  position: relative;
  border-radius: 15px;
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
  transition: all 0.2s;
  font-size: 20px;
`;

const DetailMemoContainer = styled(DetailTitle)`
  height: 100%;
  min-height: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  heigth: 100%;
  align-items: flex-start;
  padding-top: 15px;
`;

const DetailMemo = styled.p`
  font-family: 'GmarketSansMedium';

  font-size: 20px;
`;

const CloseBtn = styled.button`
  width: 480px;
  background: #94a7ff;
  border-radius: 200px;
  box-shadow: 5px 10px 20px #7990ff40;
  transition: all 0.5s;
  cursor: pointer;
  overflow: hidden;
  padding: 10px;
  border: none;
  color: #fff;
  font-size: 20px;

  &:hover {
    background: #a9b9ff;
  }

  &:active {
    background: #b29ff3;
  }

  ${(props) =>
    props.showCreateTodo &&
    css`
      transform: rotate(45deg);
      background: #b29ff3;

      &:hover {
        background: #9e8ae6;
      }
    `}
`;

export default Detailtodo;
