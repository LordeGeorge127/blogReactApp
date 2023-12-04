import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import LineItem from './LineItem';
const ItemList = ({ items, handleCheck, deleteItem }) => {
    // const  = props;
  return (
    <ul>
      {items.map((item) => (
            <LineItem 
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}

export default ItemList