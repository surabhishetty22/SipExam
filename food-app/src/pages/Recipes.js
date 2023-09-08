import React from "react";
import { Link } from "react-router-dom";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const recipes = [
    {
      title: "Chicken Pizza",
      image: "/img/gallery/img_1.jpg",
      url: "https://www.tasteofhome.com/recipes/chicken-pizza/",
    },
    {
      title: "Biriyani",
      image: "/img/gallery/biri.jpeg",
      url: "https://www.ruchiskitchen.com/chicken-biryani/",
    },
    {
      title: "Pulav",
      image: "/img/gallery/pulav.jpeg",    
      url: "https://www.whiskaffair.com/veg-pulao-recipe/",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",     
      url: "https://food.ndtv.com/recipe-mutton-biryani-339364",
    },
    {
      title: "Oreo cake",
      image: "/img/gallery/orea.jpeg",
      url: "https://recipes.timesofindia.com/recipes/oreo-cake/rs54424835.cms",
    },
    {
      title: "Chicken Lolipop",
      image: "/img/gallery/lol.jpeg",
      url: "https://recipes.timesofindia.com/recipes/chicken-lollipop/rs53222175.cms",
    },
    // Add more recipes with URLs
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <div key={index}>
            <RecipeCard recipe={recipe} />
            <Link to={recipe.url}>
              <button>View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
