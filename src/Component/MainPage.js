import React, { useState, useEffect } from 'react';
import MealCards from './Mealcards';

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState("Search and Get Recipe's");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of cards to display per page

  const categoriesApiKey = process.env.REACT_APP_CATEGORIES_API_KEY;
  const searchApiKey = process.env.REACT_APP_SEARCH_API_KEY;

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(categoriesApiKey);
      const jsonData = await response.json();
      setCategories(jsonData.categories);
    };
    fetchCategories();
  }, [categoriesApiKey]);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("Search and Get Recipe's");
      setData([]);
    } else {
      const response = await fetch(`${searchApiKey}${search}`);
      const jsonData = await response.json();
      setData(jsonData.meals);
      setMsg("Your Search Result's");
    }
  };

  const handleCuisineClick = (cuisine) => {
    setSearch(cuisine);
    myFun();
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      myFun();
    }
  };

  const showCategories = search === "";

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="toggle-switch" onClick={() => setIsDarkMode(!isDarkMode)}>
        <button className="toggle-button">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
          <input
            placeholder='Search Meals'
            type='text'
            value={search}
            onChange={handleInput}
            onKeyDown={handleSearchKeyDown}
          />
          <button onClick={myFun}>Search</button>
        </div>

        {showCategories && (
          <>
            <div className="cuisine-list">
              {currentCategories.map((category) => (
                <div
                  key={category.idCategory}
                  className="cuisine-card"
                  onClick={() => handleCuisineClick(category.strCategory)}
                >
                  <img src={category.strCategoryThumb} alt={category.strCategory} className="cuisine-image" />
                  <div className="cuisine-name">{category.strCategory}</div>
                </div>
              ))}
            </div>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`page-button ${index + 1 === currentPage ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}

        {!showCategories && (
          <>
            <h2 className='text'>{msg}</h2>
            <div>
              <MealCards detail={data} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainPage;
