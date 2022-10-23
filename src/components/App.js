import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useReducer,
} from 'react';
import TodoMain from './TodoMain';
import TodoList from './TodoList';
import { createGlobalStyle } from 'styled-components';
import CreateForm from '../pages/CreateForm';
import TodoTemplate from './TodoTemplate';
import TodoTopMenu from './TodoTopMenu';
import AddButton from './AddButton';

export const CREATE_TODO = 'CREATE_TODO';
export const CLOSE_CREATE_TODO = 'CLOSE_CREATE_TODO';
export const CLICK_ADD_BUTTON = 'CLICK_ADD_BUTTON';

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      const newTodos = [...state.data, action.todo];
      return {
        ...state,
        newTodos,
      };
    case CLOSE_CREATE_TODO:
      return {
        ...state,
        showCreateTodo: false,
      };
    case CLICK_ADD_BUTTON:
      return {
        ...state,
        showCreateTodo: true,
      };
    default:
      return;
  }
};

const initialState = {
  data: [
    {
      id: 1,
      task: '밥 먹기',
      memo: '메모',
    },
    {
      id: 2,
      task: '게임하기',
      memo: '메모',
    },
    {
      id: 3,
      task: '포스트 발행하기',
      memo: '메모',
    },
  ],
};

function App() {
  const id = useRef(4); // 투두 아이디 번호
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showCreateTodo, setShowCreateTodo] = useState(false);
  const { data } = state || {};

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoTopMenu />
        {showCreateTodo ? (
          <CreateForm id={id} dispatch={dispatch} />
        ) : (
          <TodoMain todos={data} />
        )}
        <AddButton
          showCreateTodo={showCreateTodo}
          setShowCreateTodo={setShowCreateTodo}
        />
      </TodoTemplate>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'yg-jalnan';
  }

  html {
    background: linear-gradient(#f2daff, 25%, #b4c4ff77, 70%, #a9c0ff00);
    width: 100%;
    height: 100vh;
  }

`;
