import { useState } from "react";
const SingleItem = ({ item, removeItem, editItem}) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  const handleDelete = () => {
    removeItem(item.id);
  }
  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    item.completed = newCheckedState;
    editItem(item);
  }
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button className='btn remove-btn' type='button' onClick = {handleDelete}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
