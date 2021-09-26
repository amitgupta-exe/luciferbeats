import React, { Component } from 'react';
import SamplePack from './SamplePack';

import { ProductConsumer } from '../context';

export default class PackList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className=" d-inline-flex container">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <SamplePack key={product.id} product = {product}/>
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
