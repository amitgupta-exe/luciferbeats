import React from 'react';
import SamplePack from './SamplePack';


const PackList = ({ data }) => {

    const { slideNo, slideTitle, totalPrice, backgroundPhoto, packs } = data;

    console.log(data);


    return (
        <div style={{ backgroundImage: `url(${backgroundPhoto})`, backgroundSize: "cover" }} className="packlist">
            <p>#New Arrivals</p>
            <div className="samples">
                {packs.map(product => {
                    return <SamplePack image={backgroundPhoto} key={product.id} product={product} />
                })}
            </div>
            <h1>{slideTitle}</h1>
            <h3>{slideNo}</h3>
            <p>{totalPrice}</p>
        </div>
    )
}

export default PackList
