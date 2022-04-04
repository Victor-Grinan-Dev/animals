import React from 'react';
import "./AnimalCard.css"
const AnimalCard = (props) => {
  return (
    <div className="card">
      <img
      className="animalImage"
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt={props.name}
      />
      <button className="remove" onClick={props.remove}>X</button>
        <div className="cardFooter">
            <h2 className="title">{props.name}</h2>
            <div className="likes_container">
                <p className="likes">❤ {props.like}</p>
                <button onClick={props.add}> like </button>
            </div>
        </div>
    </div>
  );
};

export default AnimalCard;