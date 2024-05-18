import {useEffect, useState} from "react";
import {getCategories} from "../service/CustomerService";

const Create = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    },);

    const loadCategories = async () => {try {
        const result = await getCategories();
        setCategories(result.data);
    }catch (e) {
        console.error(e);
    }
    };
    return (
        <form>
            <div>
                <label>Name:</label>
                <input type="text" />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" />
            </div>
            <div>
                <label>Category:</label>
                <select>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Create</button>
        </form>
    )
}
export default Create;