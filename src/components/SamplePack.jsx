import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';


export default class SamplePack extends Component {
    render() {
        const { id, title, profileImage, noOfSounds, price } = this.props.product;
        return (
            <ProductConsumer>
                {(value) => (
                    <Link to="/details">
                        <div onClick={() => value.handleDetail(id)} className="bg-info text-dark ">
                            <img className="w-100 p-3 rounded" src={profileImage} alt="" />
                            <h1>Title: {title}</h1>
                            <h3>Nuber of Sounds: {noOfSounds}</h3>
                            <p>Price: {price}</p>
                        </div>
                    </Link>
                )}

            </ProductConsumer>
        )
    }
}

