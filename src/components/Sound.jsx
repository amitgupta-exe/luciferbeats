import React from 'react'

const Sound = ({ data }) => {
    return (
        <div className="d-flex ">
            <p>{data.name}</p>
            <audio controls>
                <source src={data.source} type="audio/ogg" />
            </audio>
        </div>
        )
}

export default Sound
