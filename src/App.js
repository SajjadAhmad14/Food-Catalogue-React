import FoodItem from './components/FoodItem';
import Categories from './containers/Categories';
import Foods from './containers/Foods';

import './App.css';

function App() {
  return (
    <div className="App">
      <Categories />
      <Foods />
      <FoodItem />
    </div>
  );
}

export default App;
