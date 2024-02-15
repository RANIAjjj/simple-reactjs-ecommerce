
import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import { axiosInstance } from '../axios/instance';
import { useDispatch, useSelector } from 'react-redux';
import {getProduct} from '../Redux/slices/productSlice'

function Products() {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)
    console.log(products)
    useEffect(() => {
        // axiosInstance.get("https://dummyjson.com/products").then(data => {
        //     // console.log(data.data.products)
        //     setProducts([...data.data.products]);
        // })
        dispatch(getProduct())

    }, [])
    return (
        <div className='row'>
            {
                products.map((item) => {
                    return <div key={item.id} className='col-3 mt-1'> <ProductsCard data={item} /></div>
                })
            }
        </div>
    )
}

export default Products
