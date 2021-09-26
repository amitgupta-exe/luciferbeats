import React, { Component } from 'react';
import { packs } from './data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state ={
        products: packs
    }
    render() {
        return (
            <ProductContext.Provider value={this.state.products}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}



const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
