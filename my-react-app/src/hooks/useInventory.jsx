import { useState, useEffect } from "react";
import axios from 'axios';

const useInventory = (method, productId = null) => {

    const [inventory, setInventory] = useState([]);

    // The if statements for different methods should be converted to a switch statement for better readability and maintainability.
    switch (method) {
        case 'GET':
            useEffect(() => {
                const fetchInventory = async () => {
                    try {
                        const response = await axios.get('https://fakestoreapi.com/products');
                        console.log(response);
                        setInventory(response.data);
                    } catch (error) {
                        console.log('Error fetching inventory', error);
                    }
                };

                fetchInventory();
            }, []);

            return inventory;

        case 'POST':
            const submitProduct = async (productData) => {
                // event.preventDefault();
        
                try {
                    const response = await axios.post('https://fakestoreapi.com/products', productData);
                    setInventory((prevList) => [...prevList, response.data]);
                    console.log("Updated inventory:", inventory);
                } catch (error) {
                    console.error("Error submitting product:", error);
                }
            };
            return submitProduct;

        case 'DELETE':
            const deleteProduct = async (productId) => {
                try {
                    await axios.delete(`https://fakestoreapi.com/products/${productId}`);
                    setInventory((prevList) => prevList.filter((product) => product.id !== productId));
                } catch (error) {
                    console.error('Error deleting product:', error);
                }
            }
            return deleteProduct;
        default:
            return null;

    };
    
};
    
    export default useInventory;
