import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FoodItem from '../components/FoodItem';

it('render correctly when there are items', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <FoodItem />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});

it('render correctly when there is only one food item', () => {
  const item = {
    name: 'item1',
  };
  const tree = renderer.create(
    <BrowserRouter>
      <FoodItem item={item} />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
