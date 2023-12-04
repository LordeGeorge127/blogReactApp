import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content2() {
  const [name, changeName] = useState("Dave");
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "item 1" },

    {
      id: 2,
      checked: false,
      item: "this is snow from eastern subsaharan africa",
    },
    { id: 3, checked: false, item: "item 3" },
  ]);

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex={0}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Content2;
