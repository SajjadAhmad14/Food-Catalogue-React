import React, { useState, useEffect } from 'react';
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState(['All']
  )
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        const categories = await result.data
        return categories;
      } catch (error) {
        return error;
      }
    }
    (async () => {
      const arr = await fetchData();
      const list = arr.categories.map(item => item.strCategory);
      setCategories(list);
    })();
  });
  return (
    <div className="intro">
      <div className="logo"></div>
      <h2>Discover the best food & drinks!</h2>
      <select className="categroes">
        {categories.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>
      <input type="text" className="search" placeholder="Search for a dish" />
    </div>
  )
}

export default Categories;
