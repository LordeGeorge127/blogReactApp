import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit, handleChange }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={handleChange}
      />
      <button type="submit" 
            aria-label="Add Item" 
            onClick={()=>inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
