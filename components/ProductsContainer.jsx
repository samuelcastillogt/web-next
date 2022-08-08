import React, {useState, useEffect} from 'react';
import CircularProgress from "@mui/material/CircularProgress"
import Product from './Product';
const ProductsContainer = () => {
    const [products, setProducts]= useState(false)
    useEffect(async()=>{
        const productList = await fetch("./api/users")
        const data = await productList.json()
        setProducts(data)
    }, [])
    return (
        <div className='container'>
            {
                !products && <CircularProgress />
            }
            {
                products.length >=1  && products.map(item => <Product name={item.data.username} id={item.id} key={item.id}/>)
            }
        </div>
    );
};

export default ProductsContainer;