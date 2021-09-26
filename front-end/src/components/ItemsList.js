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
			<section>
				<table>
					<thead >
						<tr>
							<th scope="col">Name</th>
							<th scope="col">category</th>
							<th scope="col">Description</th>
							<th scope="col">Price</th>
							<th scope="col">Location</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => {
							return <ItemListItem key={item.id} item={item} />;
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default ItemsList 