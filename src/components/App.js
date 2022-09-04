import React, { useState, useEffect, useRef, useCallback } from 'react';
import TodoMain from './TodoMain';
import TodoList from './TodoList';
import { createGlobalStyle } from 'styled-components';
import CreateForm from '../pages/CreateForm';
import TodoTemplate from './TodoTemplate';
import TodoTopMenu from './TodoTopMenu';
import AddButton from './AddButton';

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

function App() {
  const [addBtnClick, setAddBtnClick] = useState(false);
  const getAddBtnClick = useCallback(() => {
    setAddBtnClick(!addBtnClick);
  }, [addBtnClick]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoTopMenu />
        {addBtnClick ? <CreateForm /> : <TodoMain getAddBtnClick={getAddBtnClick} />}
        <AddButton getAddBtnClick={getAddBtnClick} addBtnClick={addBtnClick} />
      </TodoTemplate>
    </>
  );
}

export default App;
