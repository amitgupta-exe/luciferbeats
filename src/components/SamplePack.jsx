import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';


const SamplePack = ({ product }) => {
    const {handleDetail} = useContext(ProductContext);

    const { id, title, profileImage, noOfSounds, price } = product;

    return (

        <Link to="/details">
            <div onClick={() => { handleDetail(id) }} className="bg-info text-dark ">
                <img className="w-100 p-3 rounded" src={profileImage} alt="" />
                <h1>Title: {title}</h1>
                <h3>Nuber of Sounds: {noOfSounds}</h3>
                <p>Price: {price}</p>
            </div>
        </Link>
    )
}

export default SamplePack

