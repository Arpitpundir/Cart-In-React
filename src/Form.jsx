import { useEffect, useState } from "react"

const Form = ({addNewItem}) => {
  const [newItemName, setNewItemName] = useState('');
  const handleNameChange = (e) =>{
    setNewItemName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItemName) return;
    addNewItem(newItemName);
    setNewItemName('');
  }

  useEffect(() => {
    console.log(newItemName);
  })

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery cart</h4>
      <div className="form-control" onSubmit={handleSubmit}>
        <input type="text" className="form-input" onChange = {handleNameChange} value = {newItemName}/>
        <button className="btn" type = 'submit'>
          add item
        </button>
      </div>
    </form>
  )
}

export default Form;