import TodoList from './TodoList';
import AddButton from './AddButton';
import styled from 'styled-components';

const ListContainer = styled.div`
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

/* 메인 페이지 */
const TodoMain = ({ todos }) => {
  return (
    <>
      <ListContainer>
        {/* +버튼 누르기 전에 보일 화면 */}
        <TodoList todos={todos} />
      </ListContainer>
    </>
  );
};

export default TodoMain;
