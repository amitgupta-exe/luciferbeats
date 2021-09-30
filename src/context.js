import React, { useState, createContext } from 'react';
import { info } from './data';


export const ProductContext = createContext();

export const ProductProvider = (props) => {


    const [slide, setSlide] = useState(info[0]);

    const [detail, setDetail] = useState([]);


    const getItem = (id) => {
        const product = slide.packs.find(item => item.id === id);
        return product;
    }

    const handleDetail = (id) => {
        console.log(id);
        const product = getItem(id);
        console.log(product);
        setDetail(product);
    }

    const next = () => {
        slide.slideNo === (info.length) ? setSlide(info[0]) : setSlide(info[slide.slideNo]);
    }
    const previous = () => {
        slide.slideNo === 1 ? setSlide(info[info.length - 1]) : setSlide(info[slide.slideNo - 2]);
    }


    const ProviderValue = {
        info,
        slide,
        setSlide,
        detail,
        setDetail,
        next,
        previous,
        handleDetail
    }
    return (
        <ProductContext.Provider value={ProviderValue}>
            {props.children}
        </ProductContext.Provider>
    )

}
