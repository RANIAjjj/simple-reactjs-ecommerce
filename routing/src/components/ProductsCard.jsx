
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToFav } from '../Redux/slices/productSlice';

function ProductsCard({ data }) {

    const nav = useNavigate();
    const dispatch = useDispatch()
    function go() { // send data along with the navigation
        nav(`/ProductsDet/${data.id}`, { state: data });
        
    }
    function cart(){
        dispatch(addToFav(data))
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={data.thumbnail} height="200vh" />
            <div className="card-body">
                <h5 className="card-title"> {data.title}</h5>
                <p className="card-text">
                    {data.description}
                </p>
                <button className="btn btn-primary" onClick={go}>More Details</button>
                <button className="btn btn-primary" onClick={cart}>Add to cart</button>
                {/* <Link to={`/moviedet/${data.id}`} className="btn btn-primary">
                    go to
                </Link> */}
            </div>
        </div>
    )
}

export default ProductsCard
