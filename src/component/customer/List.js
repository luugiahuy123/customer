import React, {useEffect, useState} from "react";
import { getCustomers} from "../service/CustomerService";
import {useNavigate} from "react-router-dom";

const List = () => {
    const [customers, setCustomers] = useState([]);
const navigate = useNavigate();

    useEffect(() => {
        loadCustomer();
    },[]);


    const loadCustomer = async () => {try {
        const result = await getCustomers();
        setCustomers(result.data);}
        catch (e){
        console.error(e);
        }
    }

    return (
        <div>
            <h2>Customer List</h2>
            <button onClick={() => navigate("/create")}>add customer</button>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer , index) => (
                    <tr key={customer.id}>
                        <td>{index + 1}</td>
                        <td>{customer.name}</td>
                        <td>{customer.categories.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default List;