import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import Sound from './Sound';



const Details = () => {
    return (
        <ProductConsumer>
                {value => {
                    const { profileImage, price, title, sounds } = value.detail;
                    console.log(value.detail);
                    if (value.detail.length === 0) {
                        return (
                            <div>
                                <h1>You have refreshed the page, Go back to Home.</h1>
                                <Link to="/">
                                    <button className="btn-success"> Back To Products</button>
                                </Link>
                            </div>
                        )

                    } else {
                        return (

                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-blue">
                                        <h1>{title}</h1>
                                        <img src={profileImage} alt="" />
                                        <p>{price}</p>
                                        <div className="sounds">
                                            {sounds.map((sound) => {
                                                return <Sound key={sound.name} data={sound} />
                                            })}
                                        </div>
                                        <Link to="/">
                                            <button className="btn-success"> Back To Products</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
    )
}

export default Details

