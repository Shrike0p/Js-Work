import React from 'react';
import MealCards from './Mealcards';

const MealResults = ({ msg, data }) => {
  return (
    <>
      <h2 className='text'>{msg}</h2>
      <div>
        <MealCards detail={data} />
      </div>
    </>
  );
};

export default MealResults;
