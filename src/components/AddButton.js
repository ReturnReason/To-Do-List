import styled, { css } from 'styled-components';
import plusIcon from '../assets/plus.svg';
import CLICK_ADD_BUTTON from './App';

const AddButton = ({ showCreateTodo, dispatch }) => {
  const onClickAddButton = () => {
    dispatch({
      type: CLICK_ADD_BUTTON,
    });
  };

  console.log('test', showCreateTodo);

  return (
    <AddBtn onClick={onClickAddButton} showCreateTodo={showCreateTodo}>
      <PlusIcon className="plus-img"></PlusIcon>
    </AddBtn>
  );
};

export default AddButton;

const AddBtn = styled.div`
  width: 70px;
  height: 70px;
  background: #94a7ff;
  border-radius: 200px;
  position: absolute;
  bottom: -70px;
  right: -70px;
  margin: 55px;
  box-shadow: 5px 10px 20px #7990ff40;
  transition: all 0.5s;
  cursor: pointer;
  overflow: hidden;

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

const PlusIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  scale: 0.65;
  position: absolute;
  display: block;
  padding: 20px;
  box-sizing: content-box;
  transition: all 0.5s;
`;
