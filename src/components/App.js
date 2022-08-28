import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import '../components/List.css';
import Main from './Main';
import Create from '../pages/Create';

function App() {
  const [addBtnClick, setAddBtnClick] = useState(false);

  return (
    <>
      <Main />
      {/* <Create /> */}
    </>
  );
}

export default App;
