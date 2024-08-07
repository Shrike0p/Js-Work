import React from 'react';
import { Link } from 'react-router-dom';

const MealCards = ({ detail }) => {
  if (!detail) {
    return null;
  }

  return (
    <div className='meals'>
      {detail.map(meal => (
        <div className='mealImg' key={meal.idMeal}>
          <Link to={`/${meal.idMeal}`}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
            <button>View Recipe</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MealCards;
