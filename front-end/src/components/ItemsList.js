import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import ItemListItem from "./ItemListItem";
import LoadingScreen from "./LoadingScreen.js";
const API = apiURL();

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // const sortByAsc = () => {
  //   const sortedItems = [...items].sort((a, b) => a.price - b.price);
  //   setItems(sortedItems);
  // };

  // const sortByDesc = () => {
  //   setItems([...items].sort((a, b) => b.price - a.price));
  // };
  
  const fetchItems = () => {
    setLoading(true);
    axios
      .get(`${API}/items`)
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <section className="itemsContainer">
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search For Items..."
              className="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <h1>Items</h1>

          {/* <label>Sort By</label>
		<select>
			<option value="Ascending">Ascending</option>
			<option value="Descending">Descending</option>
		</select>
		<button onClick={sortByAsc}>Ascending</button>
		<button onClick={sortByDesc}>Descending</button> */}

          <div className="allItemsContainer">
            {items
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return <ItemListItem key={item.id} item={item} />;
              })}
          </div>
        </section>
      )}
    </div>
  );
};

export default ItemsList;
