import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div>
                <img src={props.data.imageUrl} alt="img" width="75"></img>
            </div>
            <h2>{props.data.userName}</h2>
            <p>{props.data.companyName}</p>
        </div>
    );
}

export default Card;