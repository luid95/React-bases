import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
     //inicializacion de mi array de products
	const [products, setProducts] = useState([]);

    //consulta del API para obtener los productos
	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, []);

	return products;
};

export default useGetProducts;