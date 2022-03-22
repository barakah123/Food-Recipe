import React from "react";

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className='w-50 h3' src={process.env.PUBLIC_URL + '/img/chickenRice.jpg'} alt='chickenRice' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.click}</p>
            </div>
        </div>

    );
}

export default Card;