
import ItemList from "./ItemList";

function Content(props) {
  const { items, handleCheck, deleteItem } = props;
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
      ) : (
        <p style={{ marginTop: "2rem", color: "red" }}>Your list is empty</p>
      )}
    </>
  );
}

export default Content;
