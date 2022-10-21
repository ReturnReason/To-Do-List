import styled from 'styled-components';
/* +버튼 누르기 전에 보일 화면 */

const TodoList = ({ todos }) => {
  return (
    <>
      <TodoLists>
        {Array(todos.length)
          .fill()
          .map((todo, i) => {
            return (
              <MyTodoList key={`${i}번째 to do 아이템`}>
                <Title>{todos[i].task}</Title>
                <RecycleIcon src="recycle_bin.svg"></RecycleIcon>
              </MyTodoList>
            );
          })}
      </TodoLists>
    </>
  );
};

export default TodoList;

const TodoLists = styled.div`
  padding-top: 25px;
  height: 500px;
  width: 100%;
  overflow: scroll;
`;

const RecycleIcon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 25px;
  margin-top: 5px;
  width: 25px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s;
`;

const MyTodoList = styled.div`
  margin: 0 auto;
  position: relative;
  border-radius: 100px;
  border: 4px solid #94a8ff65;
  width: 480px;
  height: 55px;
  padding-top: 13px;
  padding-left: 25px;
  padding-right: 25px;
  overflow: hidden;
  display: flex;
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
`;
