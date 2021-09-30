import React, {useState, createContext } from 'react';
import { packs } from './data';


export const ProductContext = createContext();

export const ProductProvider = (props) => {
    
    const [packss, setPackss] = useState(packs);

    const [detail, setDetail] = useState([]);


    const getItem = (id) => {
        const product = packs.find(item => item.id === id);
        return product;
    } 

    const handleDetail = (id) => {
        console.log(id);
        const product = getItem(id);
        console.log(product);
        setDetail(product);
    }

    const ProviderValue = {
        packs,
        setPackss,
        detail,
        setDetail,
        handleDetail
    } 
        return (
            <ProductContext.Provider value={ProviderValue}>
                {props.children}
            </ProductContext.Provider>
        )
    
}
