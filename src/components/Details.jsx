import React, {useContext} from 'react';
import { ProductContext } from '../context';
import { Link } from 'react-router-dom';
import Sound from './Sound';



const Details = () => {
    const {detail, slide} = useContext(ProductContext);

    const { profileImage, price, title, sounds } = detail;

    const {backgroundPhoto} = slide;

    if (detail.length === 0) {
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

            <div className="">
                <div className="">
                    <img src={backgroundPhoto} alt="" />
                    <div className="">
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
}

export default Details

