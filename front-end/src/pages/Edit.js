//Demi

import ItemEdit from "../Components/ItemEdit";

function Edit({ updateItem }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <ItemEdit updateItem={updateItem} />
    </div>
  );
}

export default Edit;