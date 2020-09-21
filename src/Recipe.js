import React from 'react';
import style from './recipe.module.css'
const Recipe = ({label, calories, image, ingredients}) => {
    return(
        <div >
            <h1>{label}</h1>
            <ul>
                {ingredients && ingredients.length > 0 && ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;