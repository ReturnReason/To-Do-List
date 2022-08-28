const addList = (e) => {
  console.log(e.target);
};

const AddButton = () => {
  return (
    <div className="btn plus-btn" onClick={addList}>
      <div className="plus-img"></div>
    </div>
  );
};

export default AddButton;
