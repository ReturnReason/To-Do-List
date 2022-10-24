import TodoList from './TodoList';
import styled from 'styled-components';

/* 메인 페이지 */
const TodoMain = ({ todos, dispatch }) => {
  return (
    <>
      <ListContainer>
        <TodoList dispatch={dispatch} todos={todos} />
      </ListContainer>
    </>
  );
};

export default TodoMain;

const ListContainer = styled.div`
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
