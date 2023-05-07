import SingleItem from "./SingleItems";
const Items = ({items, removeItem, editItem}) => {
  return (
    <div className="items">
      {items.map(curr => {
        return <SingleItem key = {curr.id} item = {curr} removeItem = {removeItem} editItem = {editItem}/>
      })}
    </div>
  )
};

export default Items;