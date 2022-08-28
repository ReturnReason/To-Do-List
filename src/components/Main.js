import Create from '../pages/Create';
import AddButton from './AddButton';
import List from './List';
import Menu from './Menu';

/* 메인 페이지 */
const Main = () => {
  return (
    <>
      <div className="container">
        <Menu />

        {/* +버튼 누르기 전에 보일 화면 */}
        {/* <List />
        <AddButton /> */}

        {/* +버튼 누르면 보일 화면 */}
        <Create />
      </div>
    </>
  );
};

export default Main;
