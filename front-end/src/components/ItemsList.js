import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import ItemListItem from "./ItemListItem";
const API = apiURL();


const ItemsList = () => {
    const [items, setItems] = useState([]);
	
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const res = await axios.get(`${API}/items`);
				console.log(res.data)
				setItems(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchItems();
	}, []);

	

	return (
		<div>
			<section className='itemsContainer'>
				<h1>Items</h1>
					<div className='allItemsContainer'>
						{items.map((item) => {
							return <ItemListItem key={item.id} item={item}/>;
						})}
					</div>
			</section>
		</div>
	);
}

export default ItemsList 