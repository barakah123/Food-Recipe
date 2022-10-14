import React from "react";

const Card = (props) => {
    return (
        <div className='tc bg-light-red dib br2 pa2 ma3 grow bw2 shadow-5'>
            <img className='w-70 h3' src={process.env.PUBLIC_URL + '/img/'+ props.image} alt='foodrecipes' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.click}</p>
            </div>
        </div>

    );
}

export default Card;