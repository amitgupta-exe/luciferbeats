import React, { Component } from 'react';
import { packs } from './data';
const ProductContext = React.createContext();



class ProductProvider extends Component {
    state = {
        products: packs,
        detail: []
    };


    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        console.log(product);
        this.setState(() => {
            return { detail: product }
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail
            }
            }>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }

