import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Mealinfo = () => {
  const { mealid } = useParams();
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInfo = async () => {
      setLoading(true); 
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const jsonData = await response.json();
      setData(jsonData.meals[0]);
      setLoading(false); 
    };

    if (mealid) {
      getInfo();
    }
  }, [mealid]);

  if (loading) {
    return <div className="loader"></div>; // Show loader while loading
  }

  return (
    <>
      {!data ? "Not Found" :
        <div className='msg'>
          <img src={data.strMealThumb} alt={data.strMeal} />
          <div className='info'>
            <h1>Recipe Detail's</h1>
            <button>{data.strMeal}</button>
            <h3>Instructions :</h3>
            <p>{data.strInstructions}</p>
          </div>
        </div>}
    </>
  );
};

export default Mealinfo;
