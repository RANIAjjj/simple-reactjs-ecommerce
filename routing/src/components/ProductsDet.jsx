
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './form.css'

function ProductsDet() {
    const loc = useLocation(); // recieve the data came from other component
    const data = loc.state
    console.log(loc.state);
    const prams = useParams();
    console.log(prams.id);
    return (
        <div className='cont'>
            <img src={data.thumbnail} width="300px"/>
            <div>
            <h3>{data.title}</h3>
            <h4>Price:{data.price}</h4>
            <p>{data.description}</p>
            </div>
        </div>
    )
}

export default ProductsDet
