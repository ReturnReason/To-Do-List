import React, { memo } from 'react';
import styled from 'styled-components';

const TodoTopMenu = () => {
  return (
    <>
      <MenuContainer>
        <h2 className="title">To Do List</h2>
        <MenuIcon src="menu.svg"></MenuIcon>
      </MenuContainer>
    </>
  );
};

export default memo(TodoTopMenu);

const MenuContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #fff;

  .title {
    color: #c2afff;
    font-family: 'yg-jalnan';
    font-size: 40px;
    padding-top: 30px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 85%;
    transform: translate(-50%);
    z-index: 5;
  }
`;

const MenuIcon = styled.img`
  width: 50px;
  position: absolute;
  left: 50px;
  top: 50px;
  cursor: pointer;
`;
