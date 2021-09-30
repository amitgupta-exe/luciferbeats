import React, { useContext } from 'react';
import SamplePack from './SamplePack';

import { ProductContext } from '../context';


const PackList = () => {

    const {packs,
        setPackss,
        detail,
        setDetail,
        handleDetail} = useContext(ProductContext);

        console.log(packs);

    return (
        <div className="py-5">
            <div className=" d-inline-flex container">
                       {packs.map(product => {
                            return <SamplePack key={product.id} product={product} />
                        })}
 
            </div>
        </div>
    )
}

export default PackList
