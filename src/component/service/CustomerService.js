import axios from "axios";

export const getCustomers = async () => {
    return await axios.get(`http://localhost:8080/customer
`)
};
export const getCategories = async () => {
    return await axios.get(`http://localhost:8080/categories
`);
};

export const deleteCustomers = async (id) => {
    return await axios.delete(`http://localhost:8080/customer/${id}`)
}
