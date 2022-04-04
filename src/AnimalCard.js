import './AnimalCard.css'
import Button from './Button';
import React from 'react';

//src={`https://source.unsplash.com/1600x900/?${props.title}`}
//

const AnimalCard = (props) => {
    return (
        <div className="card">      
            <img class="animalImage" src={`https://source.unsplash.com/1600x900/?${props.name}`}/> 
           <h3 class="title">{props.name}</h3>
           <Button/>
        </div>
    );
};  

export default AnimalCard;