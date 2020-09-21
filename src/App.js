import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {
  const APP_ID = '0c9ad70a';
  const API_KEY = '3e1cffb809a5178a75d16877d12e32f2';

  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (event) => {
    setSearchRecipe(event.target.value);
  }

  const getSearchRecipes = (event) => {
    event.preventDefault();
    setQuery(searchRecipe);
    setSearchRecipe('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearchRecipes} className="search-form">
        <input className="search-bar" type="text" placeholder="Search any Recipe" value={searchRecipe} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes && recipes.length > 0 && recipes.map((recipe, index) => (
          <Recipe
            key={index}
            label={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
