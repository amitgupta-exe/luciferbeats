import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';


const SamplePack = ({ product, image }) => {
    const {handleDetail} = useContext(ProductContext);

    const { id, title, noOfSounds, price } = product;

    return (

        <Link to="/details">
            <div onClick={() => { handleDetail(id) }} className="sample-pack">
                <h1>{title}</h1>
                <h3>{noOfSounds} Samples</h3>
                <p> Rs. {price}</p>
                <button>Buy Now</button>
                <div className="sample-icon">
                <img className="sample-icon-img" src={image} alt="" />
                </div>
            </div>
        </Link>
    )
}

export default SamplePack

