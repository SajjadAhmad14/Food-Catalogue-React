import PropTypes from 'prop-types';
import allActions from '../store/actions/index';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import axios from "axios";

const Foods = ({value}) => {
  const foods = useSelector(state => state.foodReducer.foods);
  const foodList = foods
  const food = value
  const dispatch = useDispatch();
  function getData() {
    return dispatch => {
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res =>
          dispatch(allActions.foodActions(res.data.meals))
        );
    };
  }
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      {foodList.map((item) => (
        <div>{item.strMeal}<img src={item.strMealThumb} alt="food"/></div>
      ))}
    </div>

  )
}

Foods.propTypes = {
  value: PropTypes.string,
}

Foods.defaultProps = {
  value: 'Seafood',
};

export default Foods;