import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoMain from './components/TodoMain';
import { createGlobalStyle } from 'styled-components';
import CreateForm from './pages/CreateForm';
import TodoTemplate from './components/TodoTemplate';
import TodoTopMenu from './components/TodoTopMenu';
import AddButton from './components/AddButton';

// 다 완성되면 리듀서 파일 분리하기
export const CREATE_TODO = 'CREATE_TODO';
export const CLOSE_CREATE_TODO = 'CLOSE_CREATE_TODO';
export const CLICK_ADD_BUTTON = 'CLICK_ADD_BUTTON';
export const DELETE_TODO = 'DELETE_TODO';

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat(action.todo);
    case DELETE_TODO:
      const todos = state.filter((todo) => {
        console.log(todo.id);
        return todo.id !== action.data.id;
      });
      return [...todos];
    default:
      return;
  }
};

const initialState = [
  {
    id: 1,
    task: '알고리즘 풀어요',
    memo: '메모',
  },
  {
    id: 2,
    task: '자나깨나 코딩',
    memo: '메모',
  },
  {
    id: 3,
    task: '올때 메로나 💙',
    memo: '메모',
  },
];

function App() {
  const todoId = useRef(4); // 투두 아이디 번호
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showCreateTodo, setShowCreateTodo] = useState(false);

  const toggleShowCreateTodo = useCallback(() => {
    setShowCreateTodo(!showCreateTodo);
  }, [showCreateTodo]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoTopMenu />
        {showCreateTodo ? (
          <CreateForm
            todoId={todoId}
            setShowCreateTodo={setShowCreateTodo}
            showCreateTodo={showCreateTodo}
            dispatch={dispatch}
          />
        ) : (
          <TodoMain dispatch={dispatch} todos={state} />
        )}
        <AddButton
          showCreateTodo={showCreateTodo}
          toggleShowCreateTodo={toggleShowCreateTodo}
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
    color : #94a7ff;
  }

`;
