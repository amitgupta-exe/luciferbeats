import React from 'react';
import SamplePack from './SamplePack';


const PackList = ({data}) => {

const {slideNo, slideTitle, totalPrice, packs} = data;

console.log(data);


    return (
        <div className="py-5">
            <h1>{slideTitle}</h1>
            <h3>{slideNo}</h3>
            <p>{totalPrice}</p>
            <div className=" d-inline-flex container">
                       {packs.map(product => {
                            return <SamplePack key={product.id} product={product} />
                        })}
 
            </div>
        </div>
    )
}

export default PackList
