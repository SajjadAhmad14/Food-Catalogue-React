import allActions from '../store/actions/index';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import axios from "axios";
import FoodItem from '../components/FoodItem';

const Foods = ({ food }) => {
  const [category, setCategory] = useState('Beef');
  const categories = useSelector(state => state.categoryReducer.categories);
  const categoryList = categories;
  const foods = useSelector(state => state.foodReducer.foods);
  const foodList = foods;
  const dispatch = useDispatch();

  const categoryHanle = (e) => {
    const value = e.target.value;
    setCategory(value);
  }

  const fetchFoods = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res =>
        dispatch(allActions.foodActions(res.data.meals))
      );
  }

  useEffect(() => {
    fetchFoods()
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div>
      <select className="categroes" onChange={(e) => { categoryHanle(e); }}>
        {categoryList.map((item) => (
          <option value={item.strCategory} key={item.strCategory}>{item.strCategory}</option>
        ))}
      </select>
      <div className="card-grid">
        {foodList.map((item) => (
          <FoodItem food={item} />
        ))}
      </div>
    </div>
  )
}

export default Foods;