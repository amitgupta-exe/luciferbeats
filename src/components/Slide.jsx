import React, { useContext } from 'react'
import PackList from './PackList'
import { ProductContext } from '../context';

const Slide = () => {
    const {slide, next, previous} = useContext(ProductContext);


    return (
        <main>
            <button  onClick={previous}>{`<`}</button>
            <div>
                <PackList data={slide} />
            </div>
            <button onClick={next}>{`>`}</button>

        </main>
    )
}

export default Slide
