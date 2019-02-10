import React from 'react';
import Card from './card';

const CardList = (props) => {
    return (
        <div>
            { props.cards.map((card, idx) => <Card key={idx} data={card} />) }
        </div>
    );
}

export default CardList;