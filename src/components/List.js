import './List.css';

const List = () => {
  return (
    <>
      <div className="lists">
        <div className="todo-list-items">
          <p>오늘의 할일</p>
          <img className="icon icon-recycle" src="recycle_bin.svg"></img>
        </div>
      </div>
    </>
  );
};

export default List;
