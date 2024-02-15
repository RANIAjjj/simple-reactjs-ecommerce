import React from 'react'
import { useSelector } from 'react-redux'
import ProductsCard from './ProductsCard';
import { useDispatch } from 'react-redux';
import { remv } from '../Redux/slices/productSlice';

function Fav() {
  const fav = useSelector(state => state.productReducer.fav);
    console.log(fav);
    const dispatch = useDispatch();
    function remove(id){
      dispatch(remv(id))
    }
  return (
    <div className='row'>
            {
                fav.map((item) => {
                    return <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={item.thumbnail} height="200vh" />
                    <div className="card-body">
                        <h5 className="card-title"> {item.title}</h5>
                        <p className="card-text">
                            {item.description}
                        </p>
                        <button className="btn btn-primary" onClick={()=>remove(item.id)}>Remove</button>
                    
                    </div>
                </div>
                    
                })
            }
        </div>
  )
}

export default Fav
