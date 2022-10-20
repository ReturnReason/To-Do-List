import React from 'react';
import styled from 'styled-components';

function TodoTemplate({ children }) {
  return <TodoTemplateContainer>{children}</TodoTemplateContainer>;
}

export default TodoTemplate;

const TodoTemplateContainer = styled.div`
  background: #fff;
  width: 700px;
  height: 700px;
  border-radius: 20px;
  box-shadow: 5px 10px 50px #a2a4eb5d;
  padding: 10px;
  box-sizing: border-box;
  justify-content: center;
  margin: 0 auto;
  margin-top: 130px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(#c2afff20, #cbd4ff30);
    width: 100%;
    height: 100%;
    z-index: -2;
    right: 20px;
    bottom: 20px;
    border-radius: 20px;
  }
`;
