import { useState, useEffect } from "react";
import axios from 'axios';

const useInventory = (method, productId = null) => {

    const [inventory, setInventory] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');


    if (method === 'GET') {
        useEffect(() => {
            const fetchInventory = async () => {
                try{
                    const response = await axios.get('https://fakestoreapi.com/products');
                    console.log(response);
                    setInventory(response.data);
                } catch (error) {
                    console.log('Error fetching inventory', error)
                }
            }

            fetchInventory();
        }, []);

        return inventory;
    }

    if (method === 'POST') {
            const submitProduct = async (event, productData) => {
                
                event.preventDefault();
    
                try {

                        const response = await axios.post('https://fakestoreapi.com/products', productData);
                        setInventory((prevList) => [...prevList, response.data]);
                        setTitle("");
                        setPrice(0);
                        setDescription("");
                        setImage("");
                        setCategory("")
    }
                catch (error) {
                    console.error("Error submitting product:", error)};
                }
            return submitProduct;}
            
            

    if (method ==='DELETE') {
        const deleteProduct = async (productId) => {
            try {
                await axios.delete(`https://fakestoreapi.com/products/${productId}`);
                setInventory((prevList) => prevList.filter((product) => product.id !== productId));
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        };
        return deleteProduct
    }}

    export default useInventory;