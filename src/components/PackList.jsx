import React from 'react';
import SamplePack from './SamplePack';

import { ProductConsumer } from '../context';


const PackList = () => {
    return (
        <div className="py-5">
            <div className=" d-inline-flex container">
                <ProductConsumer>
                    {value => {
                        return value.products.map(product => {
                            return <SamplePack key={product.id} product={product} />
                        })
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}

export default PackList
