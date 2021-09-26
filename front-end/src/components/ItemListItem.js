import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
const API = apiURL();

const ItemListItem = ({ item }) => {
    const [categories, setCategories] = useState(null);
    
    useEffect(() => {
		const getCategories = async () => {
			const res = await axios.get(`${API}/categories`);
			setCategories(res.data);
		  };
		getCategories();
	}, []);
    if (!categories) {
        return <p>Loading</p>
    }
   
    
      const category = categories.filter((category) => category.id === item.category_id)
	return (
       
        
		<tr>
			<td>
				<Link to={`/items/${item.id}`}>
					{item.name}
				</Link>
			</td>
            <td>
				{category[0].name} 
			</td>
			
			<td>{item.description}</td>
			<td>${item.price}</td>
            <td>{item.location}</td>
		</tr>
	);
};

export default ItemListItem;