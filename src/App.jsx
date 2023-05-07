import { useEffect, useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = getLocalStorage();
    setItems(items);
  }, []);
  const setLocalStorage = (items) => {
    localStorage.setItem('list', JSON.stringify(items));
  };
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(localStorage.getItem('list'));
    } else {
      list = [];
    }
    return list;
  };
  const addNewItem = (newItemName) => {
    const newItem = {
      name: newItemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };
  const removeItem = (itemId) => {
    const newItems = items.filter((currItem) => currItem.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const editItem = (item) => {
    const newItem = items.map(curr => {
      if(item.id === curr.id){
        return item;
      }
      return curr;
    })
    setItems(newItem);
    setLocalStorage(newItem);
  }
  return (
    <section className='section-center'>
      <Form addNewItem={addNewItem}></Form>
      <Items items={items} removeItem={removeItem} editItem = {editItem}/>
    </section>
  );
};

export default App;
